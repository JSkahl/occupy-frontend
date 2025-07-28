<script setup>
import Whatsapp from "vue-material-design-icons/Whatsapp.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
</script>

<template>
  <header class="
        bg-(--blue) text-(--white)
        w-[100vw] 2xl:h-[8vh] xl:h-[9vh] md:h-[10vh] lg:h-[11] h-[12vh]
        flex items-center justify-between p-2
  ">
    <p class="
        2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm" 
    >OCCUPY</p>
    <div class="flex gap-5">
      <Whatsapp />
      <AccountCircle />
    </div>
  </header>
</template>
