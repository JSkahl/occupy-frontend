<script setup>
import { ref } from "vue";

import Title from "@/components/common/Title.vue";
import IdInfo from "./IdInfo.vue";
import PersonalInfo from "./PersonalInfo.vue";
import EnterpriseInfo from "./EnterpriseInfo.vue";
import DriverInfo from "./DriverInfo.vue";
import RegisterPageController from "../../common/RegisterPageController.vue";

let counter = ref(0);

const decrement = () => {
  counter.value <= 0 ? (counter.value = 0) : counter.value--;
};

const increment = () => {
  counter.value >= 3 ? (counter.value = 3) : counter.value++;
};
</script>

<template>
  <div 
    class="
      w-[50vw] h-screen
      flex flex-col justify-between
    ">
    
    <Title text="Cadastro Pessoal" :size="1" class="pl-6 pt-6"/>

    <!--Pages-->
    <IdInfo v-if="counter == 0" />
    <PersonalInfo v-if="counter == 1" />
    <EnterpriseInfo v-if="counter == 2" />
    <DriverInfo v-if="counter == 3" />
    
    <!--Page controller-->
    <RegisterPageController :counter="counter" :decrement="decrement" :increment="increment" />
  </div>
</template>
