<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  icon: {
    type: Object,
    required: true
  },

  text: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
<RouterLink :to="link">
  <div class="
      w-70 h-70 
      bg-(--blue) hover:bg-(--darker-blue) cursor-pointer 
      rounded-2xl 
      shadow-[0_4px_3px_rgba(0,0,0,0.25)] 
      flex flex-col justify-around
      grow-animation
      ">
    <div class="w-full h-[55%] justify-center items-center">
      <component :is="icon" />
    </div>

    <div class="w-full">
        <p class="
            text-(--white)
            text-center
            text-xl
        ">{{ text }}</p>
    </div>
  </div>
</RouterLink>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
    width: 100%;
    height: 100%;
    margin: auto;
    color: var(--white);
}
</style>
