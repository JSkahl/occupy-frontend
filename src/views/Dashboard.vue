<script setup>
import { Tools, Handshake } from "@/icons";
import { DashboardOption } from "@/components";
</script>

<template>
  <div class="flex items-center h-full gap-[10%] justify-center">
    <DashboardOption :icon="Handshake" text="Quero alugar um equipamento" link="vehicle-locate"/>
    <DashboardOption :icon="Tools" text="Quero disponibilizar um equipamento para alugar" link="vehicle-register"/>
  </div>
</template>
