<script setup>
import { Selector } from "@/components";

import City from "vue-material-design-icons/City.vue";
import Domain from "vue-material-design-icons/Domain.vue";
import AccountTie from "vue-material-design-icons/AccountTie.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-evenly items-center">
    <Selector
      label="Cidade residencial"
      placeholder="Insira a cidade da sua empresa..."
      :icon="City"
      v-model="modelValue.cidadeResidencia"
    />
    <Selector
      label="Empresa afiliada"
      placeholder="Insira a empresa em que está afiliado..."
      :icon="Domain"
      v-model="modelValue.empresaAfiliada"
    />
    <Selector
      label="Setor"
      placeholder="Insira o seu setor..."
      :icon="AccountTie"
      v-model="modelValue.setorEmpresa"
    />
  </div>
</template>
