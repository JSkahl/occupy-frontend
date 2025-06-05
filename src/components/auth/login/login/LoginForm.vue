<script setup>
import { Input, PasswordInput, Button, Link, Title } from "@/components";
import { reactive, computed, ref, watch } from "vue";
import { useAuthStore } from "@/stores";

const auth = useAuthStore();

import Account from "vue-material-design-icons/Account.vue";

const formData = reactive({
  email: "",
  senha: "",
});

const validations = reactive({
  email: false,
  senha: false,
});

const isFormValid = computed(() => {
  return Object.values(validations).every(Boolean)
})

async function submitLogin() {
  if (isFormValid) {
    await auth.login(formData.email, formData.senha);
  } else {
  }
}
</script>

<template>
  <form class="w-[50vw] h-screen flex flex-col justify-around items-center py-[3%]" @submit.prevent="submitLogin">
    <Title text="Seja bem-vindo à Occupy!" :size="1" />

    <div class="w-full h-[40%] flex flex-col items-center content-between">
      <div class="flex flex-col justify-around h-full">
        <Input label="Email" placeholder="Insira o seu email" :icon="Account" type="email"
          @valid-email="validations.email = true" @invalid-email="validations.email = false" v-model="formData.email"/>
        <div>
          <PasswordInput label="Senha" placeholder="Insira a sua senha" @valid-password="validations.senha = true"
            @invalid-password="validations.senha = false" v-model="formData.senha"/>
          <Link link="/" text="Esqueceu a sua senha?" :size="1" />
        </div>
      </div>
    </div>

    <div class="w-full h-[40%] flex flex-col justify-evenly items-center">
      <Button type="submit" variant="filled" text="Entrar" :disabled="!isFormValid" />
      <router-link to="/register">
        <Button variant="transparent" text="Cadastrar-se" />
      </router-link>
    </div>
  </form>
</template>
