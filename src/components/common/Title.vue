<script setup>
  defineProps({
    text: {
      type: String,
      required: true,
    },

    size: {
      type: parseInt,
      default: 1,
    }
  })
</script>

<template>
  <h1 v-if="size === 1">{{ text }}</h1>
  <h2 v-if="size === 2">{{ text }}</h2>
  <h3 v-if="size === 3">{{ text }}</h3>
  <h4 v-if="size === 4">{{ text }}</h4>
  <h5 v-if="size === 5">{{ text }}</h5>
  <h6 v-if="size === 6">{{ text }}</h6>
</template>

<script setup>
  
</script>
