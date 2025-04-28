<script setup>
  defineProps({
    link: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <RouterLink :to="link" class="link">{{ text }}</RouterLink> 
</template>

<style scoped>
.link {
  text-decoration: none;
  color: var(--blue);
}
</style>
