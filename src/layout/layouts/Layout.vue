<script setup>
import { Header, AsideMenu } from "@/components";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <AsideMenu class="flex-shrink-0 hidden sm:block"/>
      <router-view class="flex-1 overflow-auto" />
    </div>
  </div>
</template>
