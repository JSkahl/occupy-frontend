<script setup>
import { Banner, PersonalRegisterForm } from "@/components";
import { useScreenResize } from "@/composables";

const { isMobile } = useScreenResize()
</script>

<template>
  <div class="flex">
    <Banner v-if="!isMobile"/>
    <PersonalRegisterForm />
  </div>
</template>
