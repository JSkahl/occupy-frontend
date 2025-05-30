<script setup>
import { ref } from "vue";
import { isEmail } from "@/utils/credentialsValidator.js";

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

  type: {
    type: String,
    required: true,
  },

  modelValue: {
    type: String,
    required: false,
  },

  // This only applies to fields that it's purpouse is confirmation
  differentFieldMessage: {
    type: String,
    default: "",
    required: false,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "valid",
  "invalid",
  "valid-email",
  "invalid-email",
]);
const errorMessage = ref("");

function validateInput() {
  const isEmpty = props.modelValue === "" ? true : false;

  if (isEmpty) {
    errorMessage.value = "Insira um valor válido";
    emit("invalid");
  } else {
    errorMessage.value = "";
    emit("valid");
  }

  if (props.type === "email") {
    if (!isEmail(props.modelValue)) {
      errorMessage.value = "Insira um email válido";
      emit("invalid-email");
    } else {
      errorMessage.value = "";
      emit("valid-email");
    }
  }
}
</script>

<template>
  <div>
    <label class="text-[var(--blue)] pl-[1%]">{{ label }}</label>

    <div
      class="flex justify-around border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)] rounded-md gap-1 pr-1 pl-1 w-52 h-6 md:w-64 md:h-8 lg:w-72 lg:h-10 xl:w-xs xl:h-12">
      <component :is="icon" />

      <input @blur="validateInput" @input="emit('update:modelValue', $event.target.value)" :value="modelValue"
        :placeholder="placeholder" class="border-none focus:outline-none w-full h-full" />
    </div>
    <div class="absolute flex-col w-[100%]">
      <p v-if="differentFieldMessage" class="text-red-500 text-sm">
        {{ differentFieldMessage }}
      </p>
      <p v-if="errorMessage" class="text-red-500 text-sm">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}
</style>
