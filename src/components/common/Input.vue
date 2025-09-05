<script setup>
import { ref, computed } from "vue";
import { isEmail } from "@/utils";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: false,
  },

  icon: {
    type: Object,
    required: false,
  },

  type: {
    type: String,
    required: false,
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

  size: {
    type: String,
    default: "large",
    validator: (value) =>
      ["small", "medium", "large", "xlarge"].includes(value),
    required: false,
  },

  textBox: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const widthClass = computed(() => {
  switch (props.size) {
    case "small":
      return "w-28 sm:w-32 md:w-40";
    case "medium":
      return "w-40 sm:w-48 md:w-56";
    case "large":
      return "w-56 sm:w-72 md:w-84";
    case "xlarge":
      return "w-56 sm:w-84 md:w-[29rem] 2xl:w-[40rem]";
    default:
      return "w-56 sm:w-72 md:w-84";
  }
});

const heightClass = computed(() => {
  if (props.textBox) {
    return "h-32";
  } else {
    return "h-12 3xl:h-16";
  }
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
      class="flex justify-around border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)] rounded-md gap-1 pr-1 pl-1 text-base transition-transform duration-200 transform hover:scale-[100.5%]"
      :class="[widthClass, heightClass]"
    >
      <component :is="icon" />

      <input
        v-if="!textBox"
        @blur="validateInput"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :placeholder="placeholder"
        class="border-none focus:outline-none w-full h-full break-words"
      />

      <textarea
        v-if="textBox"
        @blur="validateInput"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :placeholder="placeholder"
        class="border-none focus:outline-none w-full h-full break-words resize-none"
      />
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
