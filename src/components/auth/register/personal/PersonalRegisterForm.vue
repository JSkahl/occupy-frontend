<script setup>
import { ref, reactive, computed } from "vue";

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
  },
});

const pagesValidation = reactive({
  personalIdInfo: false,
  personalInfo: false,
  enterpriseInfo: false,
  driverInfo: false,
});

const currentPage = ref(false);

const onPageValid = (page, isValid) => {
  pagesValidation[page] = isValid;
  currentPage.value = pagesValidation[page];
};

const isCurrentPageValid = () => {
  return (currentPage.value = false);
};

function submitForm() {
  console.log(formData);
}
</script>

<template>
  <form class="w-[50vw] h-screen flex flex-col justify-between" @submit.prevent="submitForm">
    <Title text="Cadastro Pessoal" :size="1" class="pl-6 pt-6" />

    <!--Pages-->
    <PersonalIdInfo v-if="counter == 0" v-model="formData.personalIdInfo"
      @isFormValid="onPageValid('personalIdInfo', $event)" />
    <PersonalInfo v-if="counter == 1" v-model="formData.personalInfo"
      @isFormValid="onPageValid('personalInfo', $event)" />
    <EnterpriseInfo v-if="counter == 2" v-model="formData.enterpriseInfo"
      @isFormValid="onPageValid('enterpriseInfo', $event)" />
    <DriverInfo v-if="counter == 3" v-model="formData.driverInfo" @isFormValid="onPageValid('driverInfo', $event)" />

    <!--Page controller-->
    <RegisterPageController :dots="4" v-model:counter="counter" :pageValidation="pagesValidation"
      :currentPage="currentPage" @incremented="isCurrentPageValid" />
  </form>
</template>
