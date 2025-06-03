<script setup>
import { Input, PasswordInput } from "@/components";
import { computed, reactive, ref, watch } from "vue";
import Account from "vue-material-design-icons/Account.vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "isFormValid"]);

const confirmFields = reactive({
  confirmEmail: '',
  confirmSenha: '',
});

const validations = reactive({
  email: false,
  confirmEmail: false,
  senha: false,
  confirmSenha: false,
});

const checkEmailParity = computed(() => {
  if (confirmFields.confirmEmail && props.modelValue.email != confirmFields.confirmEmail) {
    return 'Os emails não coincidem';
  } else {
    return '';
  }
})

const checkPasswordParity = computed(() => {
  if (confirmFields.confirmSenha && props.modelValue.senha != confirmFields.confirmSenha) {
    return 'As senhas não coincidem';
  } else {
    return '';
  }
})

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
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-around items-center">
    <Input
      :icon="Account"
      label="E-mail"
      type="email"
      placeholder="Insira o seu email..."
      v-model="modelValue.email"
      @valid-email="validations.email = true"
      @invalid-email="validations.email = false"
    />
    <Input
      label="Confirmar e-mail"
      type="email"
      placeholder="Confirme o seu email..."
      v-model="confirmFields.confirmEmail"
      :icon="Account"
      :differentFieldMessage="checkEmailParity"
      @valid-email="validations.confirmEmail = true"
      @invalid-email="validations.confirmEmail = false"

    />

    <PasswordInput
      label="Senha"
      placeholder="Insira a sua senha..."
      v-model="modelValue.senha"
      @valid-password="validations.senha = true"
      @invalid-password="validations.senha = false"
    />
    <PasswordInput
      label="Confirmar senha"
      placeholder="Confirme a sua senha..."
      v-model="confirmFields.confirmSenha"
      :differentFieldMessage="checkPasswordParity" 
      @valid-password="validations.confirmSenha = true"
      @invalid-password="validations.confirmSenha = false"

    />
  </div>
</template>
