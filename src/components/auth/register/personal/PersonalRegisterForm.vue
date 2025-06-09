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
import { onMounted, ref, watch } from "vue";
import createUser from "@/services/auth/user";
import { hashPassword } from "@/utils";

const form = usePersonalRegisterForm();
const loading = ref(false);
const error = ref(null);

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
    form.resetForm();
  }
}


onMounted(() => {
  form.totalPages = 3;
});
</script>

<template>
  <form
    class="w-[50vw] h-screen flex flex-col justify-between"
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
