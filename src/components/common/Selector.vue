<script setup>
import { ref } from 'vue';

import MenuDown from 'vue-material-design-icons/MenuDown.vue'
import Dropdown from './Dropdown.vue';

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
  }
});

let isDroped = ref(false)

const dropMenu = () => { isDroped.value = !isDroped.value }
</script>

<template>
<div>
  <label class="
    text-[var(--blue)] pl-[1%]
  ">{{ label }}</label>
  <div 
    class="
      flex justify-around
      border border-(--blue) text-(--gray) placeholder-(--gray)
      rounded-md gap-1
      pr-1 pl-1
      w-52 h-6
      md:w-64 md:h-8
      lg:w-72 lg:h-10
      xl:w-xs xl:h-12
    ">

    <component :is="icon" />

    <input type="text" :placeholder="placeholder" 
    class="
      border-none focus:outline-none
      w-full h-full
    "/>
  
    <span @click="dropMenu()" 
      class="
        cursor-pointer
        target:rotate-180
      ">
      <MenuDown/>
    </span>
      </div>
  <Dropdown v-if="isDroped"/>

</div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 100%;
  height: 100%;
  color: var(--blue);
}
</style>
