<script setup>
import { computed } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },  

  labelField: {
    type: String,
    default: "name",
  },

  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "w-44 max-h-24 text-sm";
    case "large":
      return "w-72 max-h-36 text-lg";
    case "medium":
    default:
      return "w-64 max-h-28 text-base";
  }
});
</script>

<template>
    <div
        class="bg-[var(--white)] rounded-md shadow-[0px_10px_16px_7px_rgba(0,0,0,0.25)] p-2 absolute overflow-auto gap-[30px]"
        :class="sizeClasses"
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
