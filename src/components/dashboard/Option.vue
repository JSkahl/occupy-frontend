<script setup>
import { Title } from "@/components";

defineProps({
  icon: {
    type: Object,
    required: true
  },

  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="ml-60 w-28 h-28 bg-(--blue) rounded-full">
    <div class="w-[80%] h-[80%]">
      <component :is="icon" />
    </div>

    <Title :text="text" :size="1" />
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
    width: 100%;
    height: 100%;
    margin: auto;
    color: var(--white);
}
</style>
