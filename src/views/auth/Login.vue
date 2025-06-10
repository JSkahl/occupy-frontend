<script setup>
import { Banner, LoginForm } from "@/components";
import { useScreenResize } from "@/composables";

const { isMobile } = useScreenResize()
</script>

<template>
  <div class="flex">
    <Banner v-if="!isMobile"/>
    <LoginForm />
  </div>
</template>
