<script setup>
import { ref } from 'vue';

const empresas = ref([
{ empresa: 'Empresa 1' },
{ empresa: 'Empresa 2' },
{ empresa: 'Empresa 3' },
{ empresa: 'Empresa 4' },
{ empresa: 'Empresa 5' },
{ empresa: 'Empresa 6' },
{ empresa: 'Empresa 7' },
{ empresa: 'Empresa 8' },
{ empresa: 'Empresa 9' },
{ empresa: 'Empresa 10' },
])
</script>

<template>
  <div 
    class="
      bg-(--white) rounded-md shadow-[0px_10px_16px_7px_rgba(0,0,0,0.25)]
      p-2
      overflow-scroll
      gap-[30px]
      md:w-64 md:max-h-24
      lg:w-72 lg:max-h-28
      xl:w-xs xl:max-h-36
    ">
    <p v-for="x in empresas" 
      class="
        hover:bg-(--light-white)
      ">{{ x.empresa}}</p>
  </div>
</template>
