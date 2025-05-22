<script setup>
import Input from "@/components/common/Input.vue";
import Selector from "@/components/common/Selector.vue";

import City from "vue-material-design-icons/City.vue";
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import Flag from "vue-material-design-icons/Flag.vue";
</script>

<template>
  <div class="w-[100%] h-[100%] flex items-center flex-col justify-around py-8">
    <Selector label="País" placeholder="Insira o seu país..." :icon="Flag" />
    <Input label="Estado" placeholder="Insira o seu estado..." :icon="City" />
    <Input
      label="Cidade"
      placeholder="Insira a sua cidade..."
      :icon="City"
    />

    <div class="w-[100%] flex justify-around">
      <div>
        <Input label="CEP" placeholder="Insira o seu CEP..." :icon="MapMarker" />
        <Input label="Endereço" placeholder="Insira o seu endereço" :icon="MapMarker" />
      </div>

      <div>
        <Input label="Bairro" placeholder="Insira o seu bairro..." :icon="MapMarker" />
        <Input label="Complemento" placeholder="Insira o complemento..." :icon="MapMarker" />
      </div>
    </div>
  </div>
</template>
