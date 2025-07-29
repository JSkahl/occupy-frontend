<script setup>
import {
  Title,
  EquipmentId,
  EquipmentInfo,
  EquipmentDoc,
  EquipmentPreview,
  RegisterPageController,
} from "@/components";
</script>

<template>
  <div class="p-3 h-full">
    <Title text="Cadastro de veículo" :size="1" />

    <!--Form-->
    <div class="
        h-[80%]
        flex justify-between
    ">

      <!--First column-->
      <div class="
          w-[70%] h-full bg-blue-600
          flex flex-col justify-between
      ">

        <!--First row-->
        <div class="
            w-full h-[70%] bg-red-800
            flex flex-row justify-between
        ">
          <EquipmentId />
          <EquipmentDoc />
        </div>

        <!--Second row-->
        <EquipmentInfo />
      </div>
    
      <!--Separator-->
      <div class="w-[1px] bg-(--blue) h-full"></div>

      <!--Second Column-->
      <EquipmentPreview />
    </div>
    <RegisterPageController />
  </div>
</template>
