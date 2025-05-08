<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: true,
  },

  icon: {
    type: Object,
    required: false,
  },

  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <label class="text-[var(--blue)] pl-[1%]">{{ label }}</label>

    <div
      class="flex justify-around border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)] rounded-md gap-1 pr-1 pl-1 w-52 h-6 md:w-64 md:h-8 lg:w-72 lg:h-10 xl:w-xs xl:h-12">
      <component :is="icon" />

      <input :type="type" :placeholder="placeholder" class="border-none focus:outline-none w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}
</style>
