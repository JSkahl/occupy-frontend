<script setup>
import { Selector } from "@/components";
import { onMounted, reactive, ref, watch } from "vue";
import { usePersonalRegisterForm } from "@/stores";
import { getCities } from "@/services";

import City from "vue-material-design-icons/City.vue";
import Domain from "vue-material-design-icons/Domain.vue";
import AccountTie from "vue-material-design-icons/AccountTie.vue";

const sectors = [
  { name: "Marketing" },
  { name: "Motorista" },
  { name: "RH" },
  { name: "Financeiro" },
  { name: "Outro" },
];

const teste = [
  {
    "codigoIbge": "string",
    "id": 0,
    "nome": "string",
    "pais": "BRASIL",
    "posicaoLatLng": {
      "latitude": 0,
      "longitude": 0
    },
    "uf": "string"
  }
]

const cities = ref([{nome: 'teste'}]);
const loading = ref(false);
const error = ref(null);

async function loadCities() {
  loading.value = true;
  try {
    const data = await getCities();
    cities.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

const form = usePersonalRegisterForm();

const validations = reactive({
  cidadeResidencia: false,
  empresaAfiliada: false,
  setorEmpresa: false,
});

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.enterpriseInfo = true;
    } else {
      form.validForms.enterpriseInfo = false;
    }

    if (form.formData.setorEmpresa === "Motorista") {
      form.isDriver = true
      console.log(isDriver)
    } else {
      form.isDriver = false
    }
  },
);

onMounted(() => {
  loadCities();
});
</script>

<template>
  <div class="w-[100%] h-[100%] p-3 flex flex-col justify-evenly items-center">
    <Selector label="Cidade residencial" placeholder="Insira a cidade da sua empresa..." :icon="City"
      v-model="form.formData.cidadeResidencia" :options="teste" labelField="nome"
      @valid="validations.cidadeResidencia = true" @invalid="validations.cidadeResidencia = false" :returnObject="true"/>
    <Selector label="Empresa afiliada" placeholder="Insira a empresa em que está afiliado..." :icon="Domain"
      v-model="form.formData.empresaAfiliada" :options="teste" labelField="nome"
      @valid="validations.empresaAfiliada = true" @invalid="validations.empresaAfiliada = false" />
    <Selector label="Setor" placeholder="Insira o seu setor..." :icon="AccountTie"
      v-model="form.formData.setorEmpresa" :options="sectors" labelField="name"
      @valid="validations.setorEmpresa = true" @invalid="validations.setorEmpresa = false" />
  </div>
</template>
