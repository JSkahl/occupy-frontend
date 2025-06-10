<script setup>
import { Input, PasswordInput } from "@/components";
import { computed, reactive, watch, watchEffect } from "vue";
import Account from "vue-material-design-icons/Account.vue";
import { usePersonalRegisterForm } from "@/stores";

const form = usePersonalRegisterForm();

const validations = reactive({
  email: false,
  confirmEmail: false,
  senha: false,
  confirmSenha: false,
});

const checkEmailParity = computed(() => {
  const email = form.formData.email;
  const confirmEmail = form.extraFields.confirmEmail;

  return !confirmEmail || email === confirmEmail
    ? ""
    : "Os emails não coincidem";
});

const checkPasswordParity = computed(() => {
  const senha = form.formData.senha;
  const confirmSenha = form.extraFields.confirmSenha;

  return !confirmSenha || senha === confirmSenha
    ? ""
    : "As senhas não coincidem";
});

watch(checkEmailParity, (message) => {
  form.formData.emailValido = message === "";
});

watch(checkPasswordParity, (message) => {
  validations.confirmSenha = message === "";
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.personalIdInfo = true;
    } else {
      form.validForms.personalIdInfo = false;
    }
  },
);
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-around items-center">
    <Input
      :icon="Account"
      label="E-mail"
      type="email"
      placeholder="Insira o seu email..."
      v-model="form.formData.email"
      @valid-email="validations.email = true"
      @invalid-email="validations.email = false"
    />

    <Input
      label="Confirmar e-mail"
      type="email"
      placeholder="Confirme o seu email..."
      v-model="form.extraFields.confirmEmail"
      :icon="Account"
      :differentFieldMessage="checkEmailParity"
      @valid-email="validations.confirmEmail = true"
      @invalid-email="validations.confirmEmail = false"
    />

    <PasswordInput
      label="Senha"
      placeholder="Insira a sua senha..."
      v-model="form.formData.senha"
      @valid-password="validations.senha = true"
      @invalid-password="validations.senha = false"
    />

    <PasswordInput
      label="Confirmar senha"
      placeholder="Confirme a sua senha..."
      v-model="form.extraFields.confirmSenha"
      :differentFieldMessage="checkPasswordParity"
      @valid-password="validations.confirmSenha = true"
      @invalid-password="validations.confirmSenha = false"
    />
  </div>
</template>
