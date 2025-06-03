<script setup>
import { reactive, computed, watch } from "vue";

import { Input, Selector } from "@/components";

import Account from "vue-material-design-icons/Account.vue";
import CircleOutline from "vue-material-design-icons/CircleOutline.vue";
import Phone from "vue-material-design-icons/Phone.vue";

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "isFormValid"]);

const genders = [
  "Feminino",
  "Masculino",
  "Não binário",
  "Prefiro não responder",
  "Outro",
];

const validations = reactive({
  nome: false,
  genero: false,
  documento: false,
  numero: false,
});

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
  <!--Form-->
  <div class="w-[50vw] h-[100%] flex flex-col justify-around items-center">
    <Input
      label="Nome completo"
      placeholder="Insira o seu nome..."
      type="text"
      :icon="Account"
      v-model="modelValue.nome"
      @valid="validations.nome = true"
      @invalid="validations.nome = false"
    />
    <Selector
      label="Gênero"
      placeholder="Insira o seu gênero..."
      :icon="CircleOutline"
      v-model="modelValue.genero"
      :options="genders"
      @valid="validations.genero = true"
      @invalid="validations.genero = false"
    />
    <Input
      label="CPF"
      placeholder="Insira o seu CPF..."
      type="text"
      :icon="Account"
      v-model="modelValue.documento"
      @valid="validations.documento = true"
      @invalid="validations.documento = false"
    />
    <Input
      label="Celular"
      placeholder="Insira o seu número..."
      type="tel"
      :icon="Phone"
      v-model="modelValue.numero"
      @valid="validations.numero = true"
      @invalid="validations.numero = false"
    />
  </div>
</template>
