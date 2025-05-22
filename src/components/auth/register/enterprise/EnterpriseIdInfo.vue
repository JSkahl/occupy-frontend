<script setup>
// Components
import { Input } from "@/components";

// Icons
import Domain from "vue-material-design-icons/Domain.vue";
import CardAccountDetails from "vue-material-design-icons/CardAccountDetails.vue";
import NoteText from "vue-material-design-icons/NoteText.vue"
</script>

<template>
  <div class="w-[100%] h-[100%] flex items-center justify-evenly flex-col py-10">
    <Input label="Nome fantasia" placeholder="Insira o nome..." :icon="Domain" />
    <Input label="Nome/Razão social" placeholder="Insira o nome..." :icon="Domain" />
    <Input label="CNPJ" placeholder="Insira o CNPJ..." :icon="CardAccountDetails" />
    <Input label="Inscrição estadual" placeholder="Insira a inscrição..." :icon="NoteText" />
  </div>
</template>
