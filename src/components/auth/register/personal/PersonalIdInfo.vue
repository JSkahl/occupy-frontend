<script setup>
import { Input, PasswordInput } from "@/components";
import { computed, reactive, watch } from "vue";
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
  let message = "";
  if (
    form.extraFields.confirmEmail &&
    form.formData.personalIdInfo.email != form.extraFields.confirmEmail
  ) {
    message = "Os emails não coincidem";
    form.formData.personalIdInfo.emailValido = false;
  } else {
    message = "";
    form.formData.personalIdInfo.emailValido = true;
  }

  return message;
});

const checkPasswordParity = computed(() => {
  if (
    form.extraFields.confirmSenha &&
    form.formData.personalIdInfo.senha != form.extraFields.confirmSenha
  ) {
    return "As senhas não coincidem";
  } else {
    return "";
  }
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
      v-model="form.formData.personalIdInfo.email"
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
      v-model="form.formData.personalIdInfo.senha"
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
