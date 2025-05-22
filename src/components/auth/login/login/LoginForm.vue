<script setup>
import Input from "@/components/common/Input.vue";
import PasswordInput from "@/components/auth/common/PasswordInput.vue";
import Button from "@/components/common/Button.vue";
import Link from "@/components/common/Link.vue";
import Title from "@/components/common/Title.vue";

import Account from "vue-material-design-icons/Account.vue";

function funcTest() {
  console.log("clicked");
}
</script>

<template>
  <div 
    class="
      w-[50vw] h-screen
      flex flex-col justify-around items-center
      py-[3%]
    ">
    <Title text="Seja bem-vindo à Occupy!" :size="1" />

    <div 
      class="
        w-full h-[40%]
        flex flex-col items-center content-between
    ">

      <div 
        class="
          flex flex-col justify-around 
          h-full
        ">
        <Input label="Email" placeholder="Insira o seu email" :icon="Account" type="email" />
        <div>
          <PasswordInput label="Senha" placeholder="Insira a sua senha"/>
          <Link link="/" text="Esqueceu a sua senha?" :size="1" />
        </div>
      </div>
    </div>

    <div 
      class="
        w-full h-[40%]
        flex flex-col justify-evenly items-center
      ">
      <Button variant="filled" text="Entrar" :onClick="funcTest" />
      <Button variant="transparent" text="Cadastrar-se" :onClick="funcTest" />
    </div>
  </div>
</template>
