<script setup>
import { ref, watch, reactive } from "vue";
import { Selector, ImageInputModal, Button } from "@/components";
import { usePersonalRegisterForm } from "@/stores";
import { Plus } from "@/icons";

const isModalOpen = ref(false);

const handleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const emit = defineEmits(["valid"]);
const form = usePersonalRegisterForm();
const validations = reactive({
  pictures: false,
  owner: false,
});

const names = [
  { name: "Pedro Álvaro" },
  { name: "João Otávio" },
  { name: "Ruan Petri" },
  { name: "Bruno Macedo" },
  { name: "Rafael Espanha" },
];
const errorMessage = ref("")

function handleImages(img) {
    errorMessage.value = ""
    form.formData.pictures = img
    validations.pictures = true
}

watch(
  () => Object.values(validations),
  (val) => {
    const allValid = val.every(Boolean);
    if (allValid) {
      emit("valid");
    } // else {
    //}
  },
);
</script>
<template>
  <div class="w-[35%] 2xl:w-[45%] flex items-center justify-around flex-col">
    <div>
      <Button
        text="Adicionar fotos"
        variant="filled"
        :onClick="handleModal"
        size="small"
        :icon="Plus"
        type="button"
      />
      <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>

      <ImageInputModal
        @isClosed="handleModal()"
        @invalid="errorMessage = 'Insira no minimo 1 imagem'"
        @valid="handleImages"
        v-if="isModalOpen"
        :isModalOpen="isModalOpen"
      />
    </div>

    <div>
      <Selector
        label="Motorista responsável"
        placeholder="Insira o motorista..."
        size="large"
        :options="names"
        v-model="form.formData.owner"
        @valid="validations.owner = true"
      />
    </div>
  </div>
</template>
