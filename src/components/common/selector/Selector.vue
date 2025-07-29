<script setup>
import { ref, computed } from "vue";
import MenuDown from "vue-material-design-icons/MenuDown.vue";
import { Dropdown } from "@/components";

const props = defineProps({
  label: String,
  placeholder: String,
  icon: Object,
  options: Array,
  modelValue: [String, Object],

  labelField: {
    type: String,
    default: "name",
  },

  returnObject: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});

const emit = defineEmits(["update:modelValue", "invalid", "valid", "blur"]);

const inputValue = ref(
  typeof props.modelValue === "object"
    ? (props.modelValue?.[props.labelField] ?? "")
    : props.modelValue || "",
);
const isDroped = ref(false);
const errorMessage = ref("");

const filteredOptions = computed(() => {
  if (!inputValue.value) return props.options;
  return props.options.filter((option) => {
    return option[props.labelField]
      .toLowerCase()
      .includes(inputValue.value.toLowerCase());
  });
});

const handleSelect = (option) => {
  inputValue.value = option[props.labelField];

  const valueToEmit = props.returnObject ? option : option[props.labelField];
  emit("update:modelValue", valueToEmit);

  errorMessage.value = "";
  isDroped.value = false;
  validateInput(option);
};

function validateInput(option = null) {
  emit("blur");
  const isValid = props.options.some(
    (opt) =>
      opt[props.labelField].toLowerCase() === inputValue.value.toLowerCase(),
  );

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

const dropMenu = () => {
  isDroped.value = !isDroped.value;
};

const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "w-44 h-6 text-sm";
    case "large":
      return "w-72 h-12 text-lg";
    case "medium":
    default:
      return "w-64 h-8 text-base";
  }
});
</script>

<template>
  <div>
    <label class="text-[var(--blue)] pl-[1%]">{{ label }}</label>
    <div
        class="flex justify-around border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)] rounded-md gap-1 pr-1 pl-1"
        :class="sizeClasses"
    >
      <component :is="icon" />
      <input
        type="text"
        :value="inputValue"
        @input="inputValue = $event.target.value"
        @focus="dropMenu"
        @blur="validateInput"
        :placeholder="placeholder"
        class="border-none focus:outline-none w-full h-full"
      />

      <span @click="dropMenu()" class="cursor-pointer">
        <MenuDown />
      </span>

    </div>
    <div class="">
      <Dropdown
        v-if="isDroped"
        @select="handleSelect"
        :options="filteredOptions"
        :labelField="labelField"
        :size="size"
        class="z-50"
      />
    </div>

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
