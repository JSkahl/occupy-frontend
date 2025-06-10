<script setup>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import Check from "vue-material-design-icons/Check.vue";
import { usePersonalRegisterForm } from "@/stores";
const form = usePersonalRegisterForm();
</script>

<template>
    <div>
        <!--Buttons-->
        <div class="w-[100%] flex px-2.5 justify-end">
            <!--Left button-->
            <button v-if="form.currentPage != 1"
                class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
                type="button"
                @click="form.previousPage">
                <ArrowLeft />
            </button>

            <!--Spacer-->
            <div v-if="form.currentPage != 1" class="flex-grow"></div>

            <!--Right button-->
            <button
                class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
                v-if="form.currentPage < form.totalPages" 
                type="button"
                @click="form.nextPage()" 
                :disabled="!form.isCurrentFormValid">
                <ArrowRight />
            </button>

            <!--Submit button-->
            <button
                class="w-12 h-12 flex justify-center items-center bg-[var(--blue)] hover:bg-[var(--darker-blue)] text-[var(--white)] rounded-lg cursor-pointer"
                type="submit" 
                v-if="form.currentPage === form.totalPages" >
                <Check />
            </button>
        </div>

        <!--Dots-->
        <div class="w-[50vw] h-12 px-[40%] flex justify-between items-center">
            <div 
                class="w-4 h-4 rounded-full shadow-[0_4px_3px_rgba(0,0,0,0.25)]"
                v-for="page in form.totalPages" 
                :key="page" 
                :class="[form.currentPage === page ? 'selected' : 'not-selected']">
            </div>
        </div>
    </div>
</template>

<style scoped>
.not-selected {
    background-color: var(--light-white);
}

.selected {
    background-color: var(--blue);
}
</style>
