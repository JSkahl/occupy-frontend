<script setup>
import { usePersonalRegisterForm } from '@/stores';
import { textShortener } from '@/utils';

const form = usePersonalRegisterForm()
</script>

<template>
    <div class="w-[25%] h-full border-(--blue) border-1 rounded-md flex justify-between flex-col">
        <!--Title-->
        <div class="w-full h-[10%] bg-(--blue) text-(--white) flex items-center justify-center">
            <p>Relatório do veículo cadastrado</p>
        </div>

        <!--Content-->
        <div class="w-full h-[88%] flex flex-col items-center gap-4 p-2">
    
            <!-- Picture -->
            <div class="w-[70%] h-[30%] bg-gray-100">
                <img class="object-cover w-full h-full" v-if="form.formData.pictures.length > 0" :src="form.formData.pictures.at(-1)?.url" alt="">
            </div>

            <!-- Identification -->
            <div class="w-full flex flex-col gap-2">
                <p class="">Nome</p>
                <p class="break-all min-h-[1.6rem]"> {{ textShortener(form.formData.name, 20) }}</p>
                <p class="">Descrição</p>
                <p class="break-all min-h-[6.5rem]"> {{ textShortener(form.formData.desc, 150) }}</p>
            </div>

            <!-- Informations -->
            <div class="w-full h-[30%] grid grid-cols-2">
                <p v-for="(value, key) in form.formData.infos" :key="key">{{ textShortener(key, 10) }} - {{ textShortener(value, 10) }}</p>
            </div>

            <!-- Ownership information -->
            <div class="w-full h-[20%]">
                <p class="">Proprietário</p>
                <p>{{form.formData.owner}}</p>
            </div>

        </div>
    </div>
</template>
