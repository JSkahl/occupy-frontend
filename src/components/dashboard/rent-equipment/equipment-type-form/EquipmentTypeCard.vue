<script setup>
const props = defineProps({
  picture: {
    type: Object,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="2xl:w-52 2xl:h-52 xl:w-48 xl:h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 w-24 h-24 bg-(--blue) text-(--white) flex flex-col justify-between p-2 text-center rounded-lg grow-animation shadow-lg cursor-pointer hover:bg-(--darker-blue) select-none">
    <div class="w-full h-[80%]">
      <component :is="picture" />
    </div>
    <p class="text-[1.2em]">{{ name }}</p>
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
}
</style>
