<script setup>
import { reactive, watch } from "vue";
import { Input } from '@/components';
import { usePersonalRegisterForm } from "@/stores";

const infos = { "Info1": "", Info2: "", Info3: "", Info4: "", Info5: "", Info6: "", Info7: "", Info8: "" }
const emit = defineEmits(["valid"]);
const form = usePersonalRegisterForm();
const validations = reactive({
  pictures: false,
  owner: false,
  infos: false,
});

form.formData.infos = { ...infos };

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      emit("valid");
    }// else {
    //}
  },
);
</script>

<template>
    <div class="h-[40%] grid 2xl:grid-cols-6 xl:grid-cols-4">
        <Input 
            v-for="(value, key) in infos" 
            :key="key"
            :label="key" 
            size="small"
            type="text"
            v-model="form.formData.infos[key]"
            @valid="validations.infos = true"
        />
    </div>
</template>
