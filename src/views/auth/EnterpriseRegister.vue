<script setup>
import { Banner, EnterpriseRegisterForm } from "@/components";
import { useScreenResize } from "@/composables";

const { isMobile } = useScreenResize();
</script>

<template>
  <div class="flex">
    <Banner v-if="!isMobile"/>
    <EnterpriseRegisterForm />
  </div>
</template>
