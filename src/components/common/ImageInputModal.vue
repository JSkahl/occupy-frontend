<script setup>
import { ref, computed, onMounted } from "vue";
import { Close } from "@/icons";

// Props
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["valid", "invalid"]);

// Modal state
const isShowing = ref(false);

onMounted(() => {
  isShowing.value = props.isModalOpen;
});

// Image storage
const images = ref([]); // Array of { id, file, url }

const closeModal = () => {
  isShowing.value = false;

  if (images.value.length === 0) {
    emit("invalid");
  } else {
    emit("valid", images.value);
  }
};
// Handle file input
const onFileChange = (event) => {
  const selectedFiles = Array.from(event.target.files);

  selectedFiles.forEach((file) => {
    const url = URL.createObjectURL(file);
    images.value.push({ id: crypto.randomUUID(), file, url });
  });

  event.target.value = null;
};

// Computed for big image & small images
const bigImage = computed(() =>
  images.value.length ? images.value[images.value.length - 1].url : null,
);
const smallImagesToShow = computed(() =>
  images.value.slice(0, Math.min(3, images.value.length - 1)),
);
const remainingCount = computed(() => Math.max(0, images.value.length - 4));

// Remove functions
const removeBigImage = () => images.value.pop();
const removeSmallImage = (index) => images.value.splice(index, 1);
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <!-- Modal -->
    <div
      v-show="isShowing"
      class="fixed inset-0 bg-[#0a001a80] z-50 flex justify-center items-center"
    >
      <!-- Pop-up -->
      <div
        class="w-[70%] h-[80%] bg-white shadow-lg overflow-auto rounded-lg relative flex flex-col"
      >
        <!-- First Row -->
        <div class="flex flex-row-reverse justify-between items-center p-3.5">
          <!--Close Button-->
          <div
            class="w-9 h-9 bg-(--red) text-(--white) flex justify-center items-center hover:bg-(--darker-red) cursor-pointer grow-animation z-0 rounded-lg"
            @click="closeModal()"
          >
            <Close />
          </div>
        </div>

        <!-- Content -->
        <div class="w-full h-[75%] p-4">
          <!-- Image Preview Layout -->
          <div class="flex gap-6">
            <!-- Last Image -->
            <div
              class="flex-1 relative transition-transform duration-200 transform hover:scale-102 cursor-pointer"
              v-if="bigImage"
            >
              <img
                :src="bigImage"
                class="w-full h-96 object-cover rounded shadow"
              />
              <button
                @click="removeBigImage"
                class="absolute top-2 right-2 bg-(--red) hover:bg-(--darker-red) grow-animation text-white w-8 h-8 rounded flex justify-center items-center"
              >
                <Close />
              </button>
            </div>

            <!-- Images Column -->
            <div v-if="images.length > 1" class="flex flex-col gap-2 w-24">
              <div
                v-for="(img, index) in smallImagesToShow"
                :key="img.id"
                class="relative grow-animation cursor-pointer"
              >
                <img
                  :src="img.url"
                  class="w-full h-24 object-cover rounded shadow"
                />
                <button
                  @click="removeSmallImage(index)"
                  class="cursor-pointer absolute top-1 right-1 bg-(--red) hover:bg-(--darker-red) grow-animation text-white text-xs w-5 h-5 flex items-center justify-center rounded small-btn"
                >
                  <Close />
                </button>
              </div>

              <div
                v-if="remainingCount > 0"
                class="w-full h-24 flex items-center justify-center text-gray-700 text-lg font-bold"
              >
                +{{ remainingCount }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center px-5 h-16">
          <!-- File Input -->
          <input
            type="file"
            multiple
            accept="image/*"
            @change="onFileChange"
            class="hidden"
            id="fileInput"
          />

          <!-- Custom button that triggers the hidden input -->
          <label
            for="fileInput"
            class="w-[20%] h-[66%] text-center cursor-pointer bg-(--blue) hover:bg-(--darker-blue) inline-block grow-animation text-white p-2 m-6 rounded shadow"
          >
            Adicionar foto
          </label>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.small-btn:deep(.material-design-icon__svg) {
  width: 70%;
  height: 70%;
  margin: auto;
}
</style>
