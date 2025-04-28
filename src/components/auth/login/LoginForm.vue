<script setup>
import Input from "@/components/common/Input.vue";
import PasswordInput from "../common/PasswordInput.vue";
import Button from "@/components/common/Button.vue";
import Link from "@/components/common/Link.vue";
import Title from "@/components/common/Title.vue";

import Account from "vue-material-design-icons/Account.vue";

function funcTest() {
  console.log("clicked");
}
</script>

<template>
  <div class="container">
    <Title text="Seja bem-vindo à Occupy!" :size="1.0" />

    <div class="form">
      <span>
        <Input label="Email" placeholder="Insira o seu email" :icon="Account" type="email" />
        <span>
          <PasswordInput label="Senha" placeholder="Insira a sua senha"/>
          <Link link="/" text="Esqueceu a sua senha?" :size="1" />
        </span>
      </span>
    </div>

    <div class="buttons">
      <Button variant="filled" text="Entrar" :onClick="funcTest" />
      <Button variant="transparent" text="Cadastrar-se" :onClick="funcTest" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  gap: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6% 0;
}

.form {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10em;
  justify-content: center;
  align-items: center;
}

.buttons {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

</style>
