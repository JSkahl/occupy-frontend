<script setup>
import { reactive, watch } from "vue"
import { Input } from "@/components";
import { usePersonalRegisterForm } from "@/stores";

import CardAccountDetails from "vue-material-design-icons/CardAccountDetails.vue";
import Numeric from "vue-material-design-icons/Numeric.vue";

const form = usePersonalRegisterForm();

const validations = reactive({
  cnh: false,
  rntrc: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.driverInfo = true;
    } else {
      form.validForms.driverInfo = false;
    }
  },
);
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
      v-model="form.formData.driverInfo.cnh"
      @valid="validations.cnh = true"
      @invalid="validations.cnh = false"
    />
    <Input
      label="Código RNTNC"
      placeholder="Insira o código RNTNC"
      type="text"
      :icon="Numeric"
      v-model="form.formData.driverInfo.rntrc"
      @valid="validations.rntrc = true"
      @invalid="validations.rntrc = false"
    />
  </div>
</template>
