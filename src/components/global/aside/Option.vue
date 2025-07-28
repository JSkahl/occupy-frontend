<script setup>
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
    <div :to="link" class="
        h-14 w-30 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48  
        flex justify-between items-center cursor-pointer 
    ">
        <div class="w-[20%]">
            <component :is="icon" class="bg-blue-500" />
        </div>

        <p class="w-[75%] text-(--blue)">{{ text }}</p>
    </div>
    <div v-if="hasBar" class="w-[100%] flex justify-center mb-10 m-72">
        <div class="border-(--blue) border w-[60%]"></div>
    </div>
</template>

<style scoped>
:deep(.material-design-icon__svg) {
  width: 60%;
  height: 60%;
  color: var(--blue);
}
</style>
