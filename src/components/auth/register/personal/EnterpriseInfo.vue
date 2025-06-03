<script setup>
import { Selector } from "@/components";
import { reactive, watch } from "vue";
import { usePersonalRegisterForm } from "@/stores";

import City from "vue-material-design-icons/City.vue";
import Domain from "vue-material-design-icons/Domain.vue";
import AccountTie from "vue-material-design-icons/AccountTie.vue";

const sectors = [
  { name: 'Marketing' },
  { name: 'Motorista' },
  { name: 'RH' },
  { name: 'Financeiro' },
  { name: 'Outro' }
];
const example = [
  { id: 1, name: 'Lorem' },
  { id: 2, name: 'Ipsum' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Doe' }
];
const form = usePersonalRegisterForm();

const validations = reactive({
  cidadeResidencia: false,
  empresaAfiliada: false,
  setorEmpresa: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.enterpriseInfo = true;
    } else {
      form.validForms.enterpriseInfo = false;
    }
  },
);
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-evenly items-center">
    <Selector
      label="Cidade residencial"
      placeholder="Insira a cidade da sua empresa..."
      :icon="City"
      v-model="form.formData.enterpriseInfo.cidadeResidencia"
      :options="example"
      labelField="name"
      @valid="validations.cidadeResidencia = true"
      @invalid="validations.cidadeResidencia = false"
    />
    <Selector
      label="Empresa afiliada"
      placeholder="Insira a empresa em que está afiliado..."
      :icon="Domain"
      v-model="form.formData.enterpriseInfo.empresaAfiliada"
      :options="example"
      labelField="name"
      @valid="validations.empresaAfiliada = true"
      @invalid="validations.empresaAfiliada = false"
    />
    <Selector
      label="Setor"
      placeholder="Insira o seu setor..."
      :icon="AccountTie"
      v-model="form.formData.enterpriseInfo.setorEmpresa"
      :options="sectors"
      labelField="name"
      @valid="validations.setorEmpresa = true"
      @invalid="validations.setorEmpresa = false"
    />
  </div>
</template>
