<script setup>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";

const props = defineProps({
  counter: {
    type: Number,
    required: true,
  },

  dots: {
    type: Number,
    required: true,
  },
});

let counter = defineModel("counter");

const decrement = () => {
  counter.value <= 0 ? (counter.value = 0) : counter.value--;
};

const increment = () => {
  counter.value >= props.dots - 1
    ? (counter.value = props.dots - 1)
    : counter.value++;
};
</script>

<template>
  <div>
    <!--Buttons-->
    <div class="w-[50vw] flex px-2.5 justify-end">
      <!--Left button-->
      <div
        v-if="counter != 0"
        class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
        @click="decrement()"
      >
        <ArrowLeft />
      </div>

      <!--Spacer-->
      <div v-if="counter != 0" class="flex-grow"></div>

      <!--Right button-->
      <div
        class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
        @click="increment()"
      >
        <ArrowRight />
      </div>
    </div>

    <!--Dots-->
    <div class="w-[50vw] h-12 px-[40%] flex justify-between items-center">
      <div
        v-for="dot in dots"
        class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]"
        :class="[counter === dot - 1 ? 'selected' : 'not-selected']"
      ></div>
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
