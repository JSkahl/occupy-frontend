<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },  

  labelField: {
    type: String,
    default: "name",
  },
});
</script>

<template>
  <div
    class="bg-(--white) rounded-md shadow-[0px_10px_16px_7px_rgba(0,0,0,0.25)] p-2 absolute overflow-scroll gap-[30px] w-52 md:w-64 lg:w-72 xl:w-xs md:max-h-24 lg:max-h-28 xl:max-h-36"
  >
    <option
      v-for="option in options"
      :key="option[labelField]"
      @click="$emit('select', option)"
      class="hover:bg-(--light-white)"
    >
      {{ option[labelField] }}
    </option>
  </div>
</template>
