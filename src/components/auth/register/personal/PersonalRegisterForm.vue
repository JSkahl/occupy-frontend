<script setup>
import {
  Title,
  PersonalIdInfo,
  PersonalInfo,
  EnterpriseInfo,
  DriverInfo,
  RegisterPageController,
} from "@/components";

import { usePersonalRegisterForm } from "@/stores";
import { onMounted, onUnmounted, ref } from "vue";
import createUser from "@/services/auth/user";
import { hashPassword } from "@/utils";
import { useScreenResize } from "@/composables";

const { isMobile } = useScreenResize();
const form = usePersonalRegisterForm();
const loading = ref(false);
const error = ref(null);

onMounted(() => {
  form.formData = {
    celular: "",
    cidadeResidencia: {},
    cnh: "",
    documento: "",
    email: "",
    emailValido: false,
    empresaAfiliada: "",
    genero: "",
    nome: "",
    rntrc: "",
    senha: "",
    setorEmpresa: "",
  };

  form.validForms = {
    personalIdInfo: false,
    personalInfo: false,
    enterpriseInfo: false,
    driverInfo: false,
  };

  form.extraFields.value = {
    confirmEmail: "",
    confirmSenha: "",
  };

  form.pageKeys = [
    "personalIdInfo",
    "personalInfo",
    "enterpriseInfo",
    "driverInfo",
  ];

  form.totalPages = 3;
});

onUnmounted(() => {
  form.formData = {};
  form.validForms = {};
  form.pageKeys = [];
  form.extraFields = {};

  form.totalPages = 1;
});

async function submitForm() {
  form.formData.senha = hashPassword(form.formData.senha);
  loading.value = true;
  error.value = null;
  try {
    const user = await createUser(form.formData);
    console.log("Criou", user);
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
    form.resetAllForms(form.formData, form.validForms, form.extraFields);
  }
}
</script>

<template>
  <form
    class="h-screen flex flex-col justify-between w-[50%]"
    :class="isMobile ? 'w-[100%]' : 'w-[50%]'"
    @submit.prevent="submitForm"
  >
    <Title text="Cadastro Pessoal" :size="1" class="pl-6 pt-6" />

    <!--Pages-->
    <PersonalIdInfo v-if="form.currentPage === 1" />
    <PersonalInfo v-if="form.currentPage === 2" />
    <EnterpriseInfo v-if="form.currentPage === 3" />
    <DriverInfo v-if="form.currentPage === 4" />

    <!--Page controller-->
    <RegisterPageController />
  </form>
</template>
