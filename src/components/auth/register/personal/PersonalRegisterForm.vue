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

const form = usePersonalRegisterForm();

</script>

<template>
  <form class="w-[50vw] h-screen flex flex-col justify-between" @submit.prevent="submitForm">
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
