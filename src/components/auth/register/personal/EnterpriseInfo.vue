<script setup>
import { Selector } from "@/components";
import { computed, reactive, watch } from "vue";

import City from "vue-material-design-icons/City.vue";
import Domain from "vue-material-design-icons/Domain.vue";
import AccountTie from "vue-material-design-icons/AccountTie.vue";

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "isFormValid"]);

const sectors = ['Marketing', 'Motorista', 'RH', 'Financeiro', 'Outro']

const example = ['Lorem', 'Ipsum', 'Jhon', 'Doe']

const validations = reactive({
  cidadeResidencia: false,
  empresaAfiliada: false,
  setorEmpresa: false,
});

const allValid = computed(() => {
  return Object.values(validations).every(v => v);
});

watch(allValid, (val) => {
  if (val) {
    emit("isFormValid", true)
  }
  if (!val) {
    emit("isFormValid", false)
  }
})
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-evenly items-center">
    <Selector
      label="Cidade residencial"
      placeholder="Insira a cidade da sua empresa..."
      :icon="City"
      v-model="modelValue.cidadeResidencia"
      :options="example"
      @valid="validations.cidadeResidencia = true"
      @invalid="validations.cidadeResidencia = false"
    />
    <Selector
      label="Empresa afiliada"
      placeholder="Insira a empresa em que está afiliado..."
      :icon="Domain"
      v-model="modelValue.empresaAfiliada"
      :options="example"
      @valid="validations.empresaAfiliada = true"
      @invalid="validations.empresaAfiliada = false"
    />
    <Selector
      label="Setor"
      placeholder="Insira o seu setor..."
      :icon="AccountTie"
      v-model="modelValue.setorEmpresa"
      :options="sectors"
      @valid="validations.setorEmpresa = true"
      @invalid="validations.setorEmpresa = false"
    />
  </div>
</template>
