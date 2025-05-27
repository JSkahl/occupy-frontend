<script setup>
import { Input, PasswordInput } from "@/components";

import Account from "vue-material-design-icons/Account.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-around items-center">
    <Input
      label="E-mail"
      placeholder="Insira o seu email..."
      :icon="Account"
      v-model="modelValue.email"
    />
    <Input
      label="Confirmar e-mail"
      placeholder="Confirme o seu email..."
      :icon="Account"
    />

    <PasswordInput
      label=" Senha"
      placeholder="Insira a sua senha..."
      v-model="modelValue.senha"
    />
    <PasswordInput
      label="Confirmar senha"
      placeholder="Confirme a sua senha..."
    />
  </div>
</template>
