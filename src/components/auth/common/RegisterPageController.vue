<script setup>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";

defineProps({
  counter: {
    type: Number,
    required: true,
  },

  decrement: {
    type: Function,
    required: true,
  },

  increment: {
    type: Function,
    required: true,
  }
})

</script>

<template>
  <!--Buttons-->
  <div 
    class="
      w-[50vw] 
      flex justify-between 
      px-2.5">

    <div 
      class="
        w-12 h-12
        flex justify-center items-center
        bg-[var(--blue)] hover:bg-[var(--darker-blue)]
        text-[var(--white)]
        rounded-md cursor-pointer
      " @click="decrement">
      <ArrowLeft />
    </div>
    {{counter}}
    <div 
      class="
        w-12 h-12
        flex justify-center items-center
        bg-[var(--blue)] hover:bg-[var(--darker-blue)]
        text-[var(--white)]
        rounded-md cursor-pointer
      " @click="increment">
      <ArrowRight />
    </div>
  </div>

  <!--Dots-->
  <div 
    class="
      w-[50vw] h-12
      px-[21%]
      flex justify-between items-center
    ">
    
    <div class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]" :class="[counter == 0 ? 'selected' : 'not-selected']"></div>
    <div class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]" :class="[counter == 1 ? 'selected' : 'not-selected']"></div>
    <div class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]" :class="[counter == 2 ? 'selected' : 'not-selected']"></div>
    <div class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]" :class="[counter == 3 ? 'selected' : 'not-selected']"></div>
  </div>
</template>

<style scoped>
.not-selected { 
  background-color: var(--white); 
}

.selected {
  background-color: var(--blue);
}
</style>
