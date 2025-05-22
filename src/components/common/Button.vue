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
    required: false,
  },
});
</script>

<template>
  <button @click="onClick"
    class="
      md:w-48 md:min-h-6 md:text-base
      lg:w-3xs lg:min-h-8 lg:text-lg
      xl:w-2xs xl:min-h-10 xl:text-xl 
      rounded-md cursor-pointer"
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

.transparent:hover {
  background-color: var(--blue);
  color: var(--white)
}

.filled {
  background-color: var(--blue);
  border: none;
  color: var(--white);
}

.filled:hover {
  background-color: var(--darker-blue);
}
</style>
