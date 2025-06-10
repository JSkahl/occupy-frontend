<script setup>
import { reactive, watch } from "vue";

import { Input, Selector } from "@/components";
import Account from "vue-material-design-icons/Account.vue";
import CircleOutline from "vue-material-design-icons/CircleOutline.vue";
import Phone from "vue-material-design-icons/Phone.vue";
import { usePersonalRegisterForm } from "@/stores";

const form = usePersonalRegisterForm();

const genders = [
  { name: "Feminino" },
  { name: "Masculino" },
  { name: "Não binário" },
  { name: "Prefiro não responder" },
  { name: "Outro" },
];

const validations = reactive({
  nome: false,
  genero: false,
  documento: false,
  celular: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.personalInfo = true;
    } else {
      form.validForms.personalInfo = false;
    }
  },
);
</script>

<template>
  <!--Form-->
  <div class="w-[100%] h-[100%] flex flex-col justify-around items-center">
    <Input
      label="Nome completo"
      placeholder="Insira o seu nome..."
      type="text"
      :icon="Account"
      v-model="form.formData.nome"
      @valid="validations.nome = true"
      @invalid="validations.nome = false"
    />
    <Selector
      label="Gênero"
      placeholder="Insira o seu gênero..."
      :icon="CircleOutline"
      v-model="form.formData.genero"
      :options="genders"
      labelField="name"
      @valid="validations.genero = true"
      @invalid="validations.genero = false"
    />
    <Input
      label="CPF"
      placeholder="Insira o seu CPF..."
      type="text"
      :icon="Account"
      v-model="form.formData.documento"
      @valid="validations.documento = true"
      @invalid="validations.documento = false"
    />
    <Input
      label="Celular"
      placeholder="Insira o seu número..."
      type="tel"
      :icon="Phone"
      v-model="form.formData.celular"
      @valid="validations.celular = true"
      @invalid="validations.celular = false"
    />
  </div>
</template>
