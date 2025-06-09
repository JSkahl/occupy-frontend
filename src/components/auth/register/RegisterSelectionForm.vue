<script setup>
import { Button, Title } from "@/components";
</script>

<template>
  <div class="flex flex-col w-[50%]">
    <div class="w-[100%] h-[35%] flex items-center justify-center">
      <Title text="Qual o seu tipo de cadastro?" :size="1" />
    </div>

    <div class="w-[100%] h-[35%] flex flex-col justify-around items-center">
      <RouterLink to="/personal-register">
        <Button
          variant="filled"
          text="Pessoal, para uso dentro de uma empresa existente"
        />
      </RouterLink>
      <RouterLink to="/enterprise-register">
        <Button
          variant="filled"
          text="Empresarial, para criar uma conta de empresa"
        />
      </RouterLink>
    </div>
  </div>
</template>
