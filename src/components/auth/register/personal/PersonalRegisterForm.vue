<script setup>
import { ref, reactive } from "vue";

import {
  Title,
  PersonalIdInfo,
  PersonalInfo,
  EnterpriseInfo,
  DriverInfo,
  RegisterPageController,
} from "@/components";

const counter = ref(0);

const formData = reactive({
  personalIdInfo: {
    email: "",
    senha: "",
  },

  personalInfo: {
    nome: "",
    genero: "",
    documento: "",
    numero: "",
  },
  
  enterpriseInfo: {
    cidadeResidencia: {},
    empresaAfiliada: "",
    setorEmpresa: "",
  },

  driverInfo: {
    cnh: "",
    rntrc: "",
  }
})

function submitForm() {
  console.log(formData)
}
</script>

<template>
  <form class="w-[50vw] h-screen flex flex-col justify-between" @submit.prevent="submitForm">
    <Title text="Cadastro Pessoal" :size="1" class="pl-6 pt-6" />

    <!--Pages-->
    <PersonalIdInfo v-if="counter == 0" v-model="formData.personalIdInfo"/>
    <PersonalInfo v-if="counter == 1" v-model="formData.personalInfo"/>
    <EnterpriseInfo v-if="counter == 2" v-model="formData.enterpriseInfo"/>
    <DriverInfo v-if="counter == 3" v-model="formData.driverInfo"/>

    <!--Page controller-->
    <RegisterPageController :dots="4" v-model:counter="counter" />
  </form>
</template>
