<script setup>
import { ref } from "vue";

import {
  Title,
  PersonalIdInfo,
  PersonalInfo,
  EnterpriseInfo,
  DriverInfo,
  RegisterPageController,
} from "@/components";

let counter = ref(0);
</script>

<template>
  <div class="w-[50vw] h-screen flex flex-col justify-between">
    <Title text="Cadastro Pessoal" :size="1" class="pl-6 pt-6" />

    <!--Pages-->
    <PersonalIdInfo v-if="counter == 0" />
    <PersonalInfo v-if="counter == 1" />
    <EnterpriseInfo v-if="counter == 2" />
    <DriverInfo v-if="counter == 3" />

    <!--Page controller-->
    <RegisterPageController :dots="4" v-model:counter="counter" />
  </div>
</template>
