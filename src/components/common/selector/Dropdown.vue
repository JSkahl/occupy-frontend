<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-(--white) rounded-md shadow-[0px_10px_16px_7px_rgba(0,0,0,0.25)] p-2 absolute overflow-scroll gap-[30px] md:w-64 md:max-h-24 lg:w-72 lg:max-h-28 xl:w-xs xl:max-h-36"
  >
    <option
      v-for="option in options"
      :key="option"
      @click="$emit('select', option)"
      class="hover:bg-(--light-white)"
    >
      {{ option }}
    </option>
  </div>
</template>
