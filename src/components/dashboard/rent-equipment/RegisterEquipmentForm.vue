<script setup>
import { onMounted, onUnmounted } from "vue";
import {
  EquipmentForm,
  EquipmentTypeList,
  RegisterPageController,
} from "@/components";
import { usePersonalRegisterForm } from "@/stores";

const form = usePersonalRegisterForm();

onMounted(() => {
  form.formData = {
    type: {},
    name: "",
    desc: "",
    pictures: [],
    owner: "",
    infos: {},
  };

  form.validForms = {
    EquipmentType: false,
    EquipmentRegister: false,
  };

  //form.extraFields.value = {};

  form.pageKeys = ["EquipmentType", "EquipmentRegister"];

  form.totalPages = 2;
});

onUnmounted(() => {
  form.formData = {};
  form.validForms = {};
  form.pageKeys = [];
  form.extraFields = {};

  form.totalPages = 1;
});

function submitForm() {
  console.log(form.formData);
}
</script>

<template>
  <form
    class="p-3 w-full h-full flex flex-col justify-between"
    @submit.prevent="submitForm"
  >
    <EquipmentTypeList v-if="form.currentPage === 1" />
    <EquipmentForm v-if="form.currentPage === 2" />

    <!-- Page controller -->
    <RegisterPageController />
  </form>
</template>
