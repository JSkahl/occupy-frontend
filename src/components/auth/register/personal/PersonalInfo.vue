<script setup>
import { ProfilePictureInput, Input, Selector } from "@/components";

import Account from "vue-material-design-icons/Account.vue";
import CircleOutline from "vue-material-design-icons/CircleOutline.vue";
import Phone from "vue-material-design-icons/Phone.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-row justify-evenly">
    <ProfilePictureInput />

    <!--Form-->
    <div class="w-[55%] h-[100%] flex flex-col justify-around items-center">
      <Input
        label="Nome completo"
        placeholder="Insira o seu nome..."
        type="text"
        :icon="Account"
        v-model="modelValue.nome"
      />
      <Selector
        label="Gênero"
        placeholder="Insira o seu gênero..."
        :icon="CircleOutline"
        v-model="modelValue.genero"
      />
      <Input
        label="CPF"
        placeholder="Insira o seu CPF..."
        type="text"
        :icon="Account"
        v-model="modelValue.documento"
      />
      <Input
        label="Celular"
        placeholder="Insira o seu número..."
        type="tel"
        :icon="Phone"
        v-model="modelValue.numero"
      />
    </div>
  </div>
</template>
