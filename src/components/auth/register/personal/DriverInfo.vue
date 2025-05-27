<script setup>
import { Input } from "@/components";

import CardAccountDetails from "vue-material-design-icons/CardAccountDetails.vue";
import Numeric from "vue-material-design-icons/Numeric.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="w-[100%] h-[100%] px-3 py-32 flex flex-col justify-between items-center"
  >
    <Input
      label="Número da CNH"
      placeholder="Insira o número da sua CNH"
      type="text"
      :icon="CardAccountDetails"
      v-model="modelValue.cnh"
    />
    <Input
      label="Código RNTNC"
      placeholder="Insira o código RNTNC"
      type="text"
      :icon="Numeric"
      v-model="modelValue.rntnc"
    />
  </div>
</template>
