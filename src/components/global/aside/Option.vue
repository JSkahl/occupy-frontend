<script setup>
import { Title } from "@/components";

defineProps({
    icon: {
        type: Object,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: false,
    },

    // It has bottom bar by default if it is not the last element
    hasBar: {
        type: Boolean,
        default: true,
        required: false,
    },
});
</script>

<template>
    <div :to="link" class="flex justify-between items-center w-[90%] h-24 cursor-pointer">
        <div class="w-[20%]">
            <component :is="icon" class="bg-blue-500 icon" />
        </div>

        <div class="w-[75%]">
            <Title :text="text" :size="3" />
        </div>
    </div>
    <div v-if="hasBar" class="w-[100%] flex justify-center mb-10 m-72">
        <div class="border-(--blue) border w-[70%]"></div>
    </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
    width: 100%;
    height: 100%;
    margin: auto;
    color: var(--blue);
}
</style>
