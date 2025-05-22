<script setup>
import { ref } from "vue";

import { RegisterPageController, Title, EnterpriseIdInfo, LocaleInfo, ContactInfo } from "@/components";

let counter = ref(0);
</script>

<template>
  <div class="w-[50vw] h-screen flex flex-col justify-between">
    <Title text="Cadastro empresarial" :size="1" class="pl-6 pt-6" />

    <!--Pages-->
    <EnterpriseIdInfo v-if="counter === 0"/>
    <LocaleInfo v-if="counter === 1"/>
    <ContactInfo v-if="counter === 2"/>

    <!--Page controller-->
    <RegisterPageController :dots="3" v-model:counter="counter" />
  </div>
</template>
