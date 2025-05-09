<script setup>
  import Title from '@/components/common/Title.vue';
  import Account from 'vue-material-design-icons/Account.vue';
</script>

<template>
  <div 
    class="
      w-44 h-52
      text-center
    ">

    <!--Picture-->
    <div 
      class="
        w-[100%] h-44 bg-(--light-white)
        rounded-full
        flex justify-center items-center
        text-(--white)
      ">
      
      <Account :size="173"/>
    </div>

    <!--Title-->
    <Title text="Foto de perfil" :size="6"/>
  </div>
</template>
