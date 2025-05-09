<script setup>
import ProfilePictureInput from '../../common/ProfilePictureInput.vue';
import Input from '@/components/common/Input.vue';
import Selector from '@/components/common/Selector.vue';

import Account from 'vue-material-design-icons/Account.vue';
import CircleOutline from 'vue-material-design-icons/CircleOutline.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
</script>

<template>
  <div 
    class="
      w-[100%] h-[100%]
      p-3
      flex flex-row justify-around items-start
    ">
  
    <ProfilePictureInput />

    <!--Form-->
    <div
      class="
        w-[80%] h-[100%]
        flex flex-col justify-between items-center
      ">
  
      <Input label="Nome completo" placeholder="Insira o seu nome..." type="text" :icon="Account"/>
      <Selector label="Gênero" placeholder="Insira o seu gênero..." :icon="CircleOutline"/>
      <Input label="CPF" placeholder="Insira o seu CPF..." type="text" :icon="Account"/>
      <Input label="Celular" placeholder="Insira o seu número..." type="tel" :icon="Phone"/>
    </div>

  </div>
</template>
