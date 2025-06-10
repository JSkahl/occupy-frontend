<script setup>
import { Title } from '@/components'
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue'
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue'
</script>

<template>
    <header class="bg-(--blue) text-(--white) w-[100vw] h-20 flex items-center justify-between p-2">
        <Title text="OCCUPY" :size="2" />
        <div class="flex w-[4%] justify-between">
            <Whatsapp />
            <AccountCircle />
        </div>
    </header>
</template>
