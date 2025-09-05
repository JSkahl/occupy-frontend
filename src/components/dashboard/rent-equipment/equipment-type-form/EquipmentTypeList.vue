<script setup>
import { watch, reactive } from "vue";
import EquipmentTypeCard from "./EquipmentTypeCard.vue"
import { Home } from "@/icons";
import { Title } from "@/components/";
import { usePersonalRegisterForm } from "@/stores";

const types = [
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
    {
        icon: Home,
        name: "Lorem"
    },
]

const form = usePersonalRegisterForm()
const validations = reactive({
    type: false,
})

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      form.validForms.EquipmentType = true;
    } else {
      form.validForms.EquipmentType = false;
    }
  },
);

const handleSelection = () => { 
    validations.type = true;
}
</script>

<template>
    <div>
        <Title text="Tipo de equipamento" :size="1"/>
        <p class="pt-5">Estou disponibilizando um...</p>
        <div class="w-full 2xl:h-[75vh] xl:h-[65vh] grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 overflow-scroll pt-5 pl-5">
            <EquipmentTypeCard
                v-for="type in types" 
                :key="type"
                :name="type.name" 
                :picture="type.icon" 
                @click="form.formData.type = type.name && handleSelection()"
                />
        </div>
    </div>
</template>

<style scoped>
</style>
