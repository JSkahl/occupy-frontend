<script setup>
  defineProps({
    link: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    }
  })
</script>

<template>
  <RouterLink :to="link" :class="['link', size === 1 ? 'small' : 'normal']">{{ text }}</RouterLink> 
</template>

<style scoped>
.link {
  text-decoration: none;
  color: var(--blue);
}

.small {
  font-size: 0.8em;
}

.normal {
  font-size: 1em;
}
</style>
