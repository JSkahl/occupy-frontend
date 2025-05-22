<script setup>
  import { Selector } from '@/components';

  import City from 'vue-material-design-icons/City.vue';
  import Domain from 'vue-material-design-icons/Domain.vue';
  import AccountTie from 'vue-material-design-icons/AccountTie.vue';
</script>

<template>
  <div 
    class="
      w-[100%] h-[100%]
      p-3
      flex flex-col justify-evenly items-center
    ">
  
    <Selector label="Cidade residencial" placeholder="Insira a cidade da sua empresa..." :icon="City"/>
    <Selector label="Empresa afiliada" placeholder="Insira a empresa em que está afiliado..." :icon="Domain"/>
    <Selector label="Setor" placeholder="Insira o seu setor..." :icon="AccountTie"/>

  </div>
</template>
