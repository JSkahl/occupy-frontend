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
</script>

<template>
    <aside class="bg-(--white) border-r-(--blue) border-r-3 h-[100vh] w-52 flex flex-col items-center">
        <Option :icon="Home" text="Menu" />
        <Option :icon="StoreSearch" text="Buscar" />
        <Option :icon="Book" text="Reservas" />
        <Option :icon="Autorenew" text="Cadastros" />
        <Option :icon="Map" text="Mapa" />
        <Option :icon="Send" text="Mensagens" />
        <Option :icon="HelpCircle" text="Suporte" />
        <Option :icon="AccountCog" text="Administrar" />
        <Option :icon="MicrosoftOffice" text="Back-Office" :hasBar="false"/>
    </aside>
</template>
