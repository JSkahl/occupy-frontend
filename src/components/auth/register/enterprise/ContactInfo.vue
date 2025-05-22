<script setup>
// Components
import { Input } from "@/components";

// Icons
import Phone from "vue-material-design-icons/Phone.vue";
import Email from "vue-material-design-icons/Email.vue";
import Web from "vue-material-design-icons/Web.vue"
</script>

<template>
  <div class="w-[100%] h-[100%] flex items-center justify-evenly flex-col py-10">
    <Input label="Número" placeholder="Insira o número..." :icon="Phone" />
    <Input label="Número residencial" placeholder="Insira o número..." :icon="Phone" />
    <Input label="E-mail" placeholder="Insira o e-mail..." :icon="Email" />
    <Input label="Website" placeholder="Insira o link..." :icon="Web" />
  </div>
</template>
