<script setup>
import { computed } from 'vue';

const props = defineProps({
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

  icon: {
    type: Object,
    required: false
  },

  size: {
    type: String,
    default: "large",
    validator: (value) => ["small", "medium", "large", "xlarge"].includes(value),
  },
});

const widthClass = computed(() => {
  switch (props.size) {
    case "small":
      return "w-28 sm:w-32 md:w-40 lg:w-44 xl:w-48";
    case "medium":
      return "w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72";
    case "large":
      return "w-56 sm:w-72 md:w-84 lg:w-96 xl:w-[28rem]";
    case "xlarge":
      return "w-72 sm:w-84 md:w-[28rem] lg:w-[32rem] xl:w-[36rem]";
    default:
      return "w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72";
  }
});
</script>

<template>
  <button @click="onClick"
    class="
      md:min-h-7 md:text-base
      lg:min-h-9 lg:text-lg
      xl:min-h-11 xl:text-xl 
      p-1
      rounded-md cursor-pointer
      grow-animation
      flex justify-around items-center
      "
    :class="[variant, widthClass]"
    >
    <component :is="icon" />
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
