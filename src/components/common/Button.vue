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
});
</script>

<template>
  <button @click="onClick"
    class="
      md:w-48 md:h-6 md:text-base
      lg:w-3xs lg:h-8 lg:text-lg
      xl:w-2xs xl:h-10 xl:text-xl 
      rounded-md"
    :class="variant"
    >
    {{ text }}
  </button>
</template>

<style scoped>
.transparent {
  background-color: transparent;
  border: 2px solid var(--blue);
  color: var(--blue);
}

.filled {
  background-color: var(--blue);
  border: none;
  color: var(--white);
}
</style>
