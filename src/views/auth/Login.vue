<script setup>
import Banner from "@/components/auth/common/Banner.vue";
import LoginForm from "@/components/auth/login/LoginForm.vue";
</script>

<template>
  <div class="container">
    <Banner />
    <LoginForm />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
  }
</style>
