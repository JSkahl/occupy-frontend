<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },

  size: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <h1 v-if="size === 1" class="text-4xl font-bold">{{ text }}</h1>
  <h2 v-else-if="size === 2" class="text-3xl font-semibold">{{ text }}</h2>
  <h3 v-else-if="size === 3" class="text-2xl font-medium">{{ text }}</h3>
  <h4 v-else-if="size === 4" class="text-xl">{{ text }}</h4>
  <h5 v-else-if="size === 5" class="text-lg">{{ text }}</h5>
  <h6 v-else class="text-base">{{ text }}</h6>
</template>
