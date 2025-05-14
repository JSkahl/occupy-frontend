<script setup>
import { defineModel } from "vue";

import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";

defineProps({
  counter: {
    type: Number,
    required: true,
  },

  dots: {
    type: Number,
    required: false,
  },
});

let counter = defineModel('counter')

const decrement = () => {
  counter.value <= 0 ? (counter.value = 0) : counter.value--;
};

const increment = () => {
  counter.value >= 3 ? (counter.value = 3) : counter.value++;
};
</script>

<template>
  <div>
    <!--Buttons-->
    <div class="w-[50vw] flex justify-between px-2.5">
      
      <!--Left button-->
      <div
        class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
        @click="decrement()">

        <ArrowLeft />
      </div>
      
      <!--Right button-->
      <div
        class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
        @click="increment()">

        <ArrowRight />
      </div>
    </div>

    <!--Dots-->
    <div class="w-[50vw] h-12 px-[40%] flex justify-between items-center">

      <div 
        v-for="dot in dots" 
        class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]"
        :class="[counter === dot - 1 ? 'selected' : 'not-selected']">
      </div>

    </div>
  </div>
</template>

<style scoped>
.not-selected {
  background-color: var(--light-white);
}

.selected {
  background-color: var(--blue);
}
</style>
