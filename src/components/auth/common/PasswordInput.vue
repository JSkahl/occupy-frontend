<script setup>
import { ref } from "vue";
import Eye from "vue-material-design-icons/Eye.vue";
import EyeClosed from "vue-material-design-icons/EyeClosed.vue";
import Lock from "vue-material-design-icons/Lock.vue";
import { isPasswordStrong } from "@/utils";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
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
  "valid-password",
  "invalid-password",
]);
const errorMessage = ref("");
const passwordErrorMessage = ref("");

function validateInput() {
  const isEmpty = props.modelValue === "" ? true : false;

  if (isEmpty) {
    errorMessage.value = "Insira uma senha válida";
    emit("invalid-password");
  } else {
    errorMessage.value = "";
  }

  if (props.modelValue && !isPasswordStrong(props.modelValue)) {
    passwordErrorMessage.value = "Insira ao menos 1 letra maiúscula e 1 número";
    emit("invalid-password");
  } else {
    passwordErrorMessage.value = "";
  }

  if (isPasswordStrong(props.modelValue) && !isEmpty) {
    emit("valid-password");
  }
}
</script>

<template>
  <div>
    <label class="text-[var(--blue)] pl-[1%]">{{ label }}</label>

    <div
      class="flex justify-around border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)] rounded-md gap-1 pr-1 pl-1 w-52 h-6 md:w-64 md:h-8 lg:w-72 lg:h-10 xl:w-xs xl:h-12"
    >
      <Lock />

      <input
        @blur="validateInput"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :type="isVisible ? 'text' : 'password'"
        :placeholder="placeholder"
        class="border-none focus:outline-none w-full h-full"
      />

      <span @click="toggleVisibility()" class="cursor-pointer">
        <Eye v-if="isVisible" />
        <EyeClosed v-else class="text-[var(--gray)]" />
      </span>
    </div>
    <div class="absolute flex-col w-[100%]">
      <p v-if="differentFieldMessage" class="text-red-500 text-sm">
        {{ differentFieldMessage }}
      </p>
      <p v-if="errorMessage" class="text-red-500 text-sm">
        {{ errorMessage }}
      </p>
      <p v-if="passwordErrorMessage" class="text-red-500 text-sm">
        {{ passwordErrorMessage }}
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
