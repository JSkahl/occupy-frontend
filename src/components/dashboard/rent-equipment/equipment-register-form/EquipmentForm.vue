<script setup>
import { reactive, watch } from "vue";
import {
  EquipmentId,
  EquipmentInfo,
  EquipmentDoc,
  EquipmentPreview,
  Title,
} from "@/components";
import { usePersonalRegisterForm } from "@/stores";

const form = usePersonalRegisterForm();
const validations = reactive({
    EquipmentId: false,
    EquipmentDoc: false,
    EquipmentInfo: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.EquipmentRegister = true;
    } else {
      form.validForms.EquipmentRegister = false;
    }
  },
);
</script>

<template>
  <!-- Title -->
  <Title text="Cadastro de equipamento" :size="1" />

  <!--Form-->
  <div class="h-[80%] flex justify-between">
    <!--First column-->
    <div class="w-[70%] h-[90%] flex flex-col justify-between">
      <!--First row-->
      <div class="w-full h-[70%] flex flex-row justify-between">
        <EquipmentId @valid="validations.EquipmentId = true"/>
        <EquipmentDoc @valid="validations.EquipmentDoc = true"/>
      </div>

      <!--Second row-->
      <EquipmentInfo @valid="validations.EquipmentInfo = true"/>
    </div>

    <!--Separator-->
    <div class="w-[1px] bg-(--blue) h-full"></div>

    <!--Second Column-->
    <EquipmentPreview />
  </div>
</template>
