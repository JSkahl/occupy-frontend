<script setup>
import { Banner, RegisterSelectionForm } from "@/components"
import { useScreenResize } from "@/composables";

const { isMobile } = useScreenResize()
</script>

<template>
  <div class="flex">
    <Banner v-if="!isMobile"/>
    <RegisterSelectionForm />
  </div>
</template>
