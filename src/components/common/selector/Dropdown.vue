<script setup>
import { computed } from "vue";

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
    validator: (value) => ["small", "medium", "large", "xlarge"].includes(value),
  },

  isDroped: {
    type: Boolean,
    default: false,
  },
});

const widthClass = computed(() => {
switch (props.size) {
  case "small":
    return "w-28 sm:w-32 md:w-40";
  case "medium":
    return "w-40 sm:w-48 md:w-56";
  case "large":
    return "w-44 sm:w-60 md:w-72";
  case "xlarge":
    return "w-72 sm:w-84 md:w-[28rem]";
  default:
    return "w-56 sm:w-72 md:w-84";
}
});
</script>

<template>
    <div
      class="bg-[var(--white)] rounded-md shadow-[0px_10px_16px_7px_rgba(0,0,0,0.25)] p-2 absolute overflow-auto gap-[30px]"
      v-if="options"
      :class="[widthClass]"
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
