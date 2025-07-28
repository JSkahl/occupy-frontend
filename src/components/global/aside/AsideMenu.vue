<script setup>
import { Option } from "@/components";
import {
  Home,
  StoreSearch,
  Book,
  Autorenew,
  Map,
  Send,
  HelpCircle,
  AccountCog,
  MicrosoftOffice,
} from "@/icons";

const items = [
  { name: "Menu", icon: Home },
  { name: "Buscar", icon: StoreSearch },
  { name: "Reservas", icon: Book },
  { name: "Cadastros", icon: Autorenew },
  { name: "Mapa", icon: Map },
  { name: "Mensagens", icon: Send },
  { name: "Suporte", icon: HelpCircle },
  { name: "Administrador", icon: AccountCog },
  { name: "Back-Office", icon: MicrosoftOffice },
];
</script>

<template>
  <div class="
      h-full w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-64
      bg-(--white) border-r-(--blue) border-r-2
      flex flex-col items-center flex-shrink-0 px-[1%]
  ">
    <Option 
        v-for="item in items" 
        :icon="item.icon" 
        :text="item.name" 
        :key="item"
        :hasBar="items.length - 1 === items.indexOf(item) ? false : true"
    />
  </div>
</template>
