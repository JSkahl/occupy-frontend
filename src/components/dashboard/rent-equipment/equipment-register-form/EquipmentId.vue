<script setup>
import { watch, reactive } from "vue";
import { Input } from "@/components";
import { usePersonalRegisterForm } from "@/stores";

const emit = defineEmits(["valid"]);
const form = usePersonalRegisterForm();
const validations = reactive({
  name: false,
  desc: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      emit("valid");
    }// else {
    //}
  },
);
</script>

<template>
  <div class="w-[65%] flex flex-col justify-center gap-[10%]">
    <Input
      label="Nome"
      placeholder="Insira o nome do equipamento..."
      type="text"
      size="xlarge"
      v-model="form.formData.name"
      @valid="validations.name = true"
    />

    <Input
      label="Descrição"
      placeholder="Insira a descrição do equipamento..."
      type="text"
      size="xlarge"
      :textBox="true"
      v-model="form.formData.desc"
      @valid="validations.desc = true"
    />
  </div>
</template>
