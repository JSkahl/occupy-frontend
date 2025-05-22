<script setup>
import { ref } from "vue";

import RegisterPageController from "@/components/auth/common/RegisterPageController.vue";
import Title from "@/components/common/Title.vue";
import EnterpriseIdInfo from "./EnterpriseIdInfo.vue";
import LocaleInfo from "./LocaleInfo.vue";
import ContactInfo from "./ContactInfo.vue";

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
