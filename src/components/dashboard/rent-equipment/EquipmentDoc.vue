<script setup>
import { ref } from "vue";
import { Selector, ImageInputModal } from "@/components";

const isModalOpen = ref(false)

const handleModal = () => {
    isModalOpen.value = !isModalOpen.value  
}
</script>
<template>
  <div class="w-[35%] bg-yellow-200 flex justify-around flex-col">
    <div>
      <button @click="handleModal()">abir</button>
      <ImageInputModal @isClosed="handleModal()" v-if="isModalOpen" :isModalOpen="isModalOpen"/>
    </div>

    <div>
      <Selector
        label="Motorista responsável"
        placeholder="Insira o motorista..."
      />
    </div>
  </div>
</template>
