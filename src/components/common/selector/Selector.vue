<script setup>
import { ref, computed, watch } from "vue";

import MenuDown from "vue-material-design-icons/MenuDown.vue";
import { Dropdown } from "@/components";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: true,
  },

  icon: {
    type: Object,
    required: false,
  },

  options: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits(["update:modelValue", "invalid", "valid"]);

const inputValue = ref("");
const isDroped = ref(false);
const errorMessage = ref("");

const filteredOptions = computed(() => {
  if (!inputValue.value) return props.options;
  return props.options.filter((option) =>
    option.toLowerCase().includes(inputValue.value.toLowerCase()),
  );
});

const handleSelect = (option) => {
  inputValue.value = option;
  emit("update:modelValue", option);
  errorMessage.value = "";
  isDroped.value = false;
};

function validateInput() {
  const isValid = props.options.includes(inputValue.value);
  if (!isValid) {
    emit("invalid");
    errorMessage.value = "Insira uma opção existente";
  } else {
    emit("valid");
  }

  setTimeout(() => {
    isDroped.value = false;
  }, 200);
}

watch(inputValue, (val) => {
  emit("update:modelValue", val);
});

const dropMenu = () => {
  isDroped.value = !isDroped.value;
};
</script>

<template>
  <div>
    <label class="text-[var(--blue)] pl-[1%]">{{ label }}</label>
    <div
      class="flex justify-around border border-(--blue) text-(--gray) placeholder-(--gray) rounded-md gap-1 pr-1 pl-1 w-52 h-6 md:w-64 md:h-8 lg:w-72 lg:h-10 xl:w-xs xl:h-12">
      <component :is="icon" />

      <input type="text" v-model="inputValue" @focus="dropMenu" @blur="validateInput" :placeholder="placeholder"
        class="border-none focus:outline-none w-full h-full" />

      <span @click="dropMenu()" class="cursor-pointer target:rotate-180">
        <MenuDown />
      </span>
    </div>
    <Dropdown v-if="isDroped" @select="handleSelect" :options="filteredOptions" class="z-50" />
    <p v-if="errorMessage" class="absolute text-red-500 text-sm">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}
</style>
