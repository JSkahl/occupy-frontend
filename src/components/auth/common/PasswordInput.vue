<script setup>
import { ref } from "vue";
import Eye from "vue-material-design-icons/Eye.vue";
import EyeClosed from "vue-material-design-icons/EyeClosed.vue";
import Lock from "vue-material-design-icons/Lock.vue";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

defineProps({
  label: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label class="
    text-[var(--blue)] pl-[1%]
  ">{{ label }}</label>

  <div 
    class="
      flex justify-around
      border border-[var(--blue)] text-[var(--gray)] placeholder-[var(--gray)]
      rounded-md gap-1
      pr-1 pl-1
      w-52 h-6
      md:w-64 md:h-8
      lg:w-72 lg:h-10
      xl:w-xs xl:h-12
    ">
    <Lock />

    <input :type="isVisible ? 'text' : 'password'" :placeholder="placeholder" 
    class="
      border-none focus:outline-none
      w-full h-full
    "/>

    <span @click="toggleVisibility()" class="cursor-pointer">
      <Eye v-if="isVisible"/>
      <EyeClosed v-else class="text-[var(--gray)]"/>
    </span>
  </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}
</style>
