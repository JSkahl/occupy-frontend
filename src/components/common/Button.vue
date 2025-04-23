<script setup>

  defineProps({
    variant: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    onClick: {
      type: Function,
      required: true,
    },
  })
</script>

<template>
  <button :class="['btn', variant]" @click="onClick">
    {{ text }}
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5em 2em;
  border-radius: 0.5em;
  font-size: 1em;
}

.transparent {
  background-color: transparent;
  border: 0.1em solid var(--purple);
  color: var(--purple);
}

.filled {
  background-color: var(--purple);
  border: none;
  color: var(--white);
}
</style>
