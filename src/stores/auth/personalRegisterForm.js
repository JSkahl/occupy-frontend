import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePersonalRegisterForm = defineStore(
  "personalRegisterForm",
  () => {
    const currentPage = ref(1);
    const totalPages = ref(1);

    const formData = ref({});
    const validForms = ref({});
    const extraFields = ref({});
    const pageKeys = ref([]);

    const isCurrentFormValid = computed(() => {
      const key = pageKeys.value[currentPage.value - 1];
      return !!key && validForms.value[key] === true;
    });

    function nextPage() {
      console.log(currentPage.value);
      if (currentPage.value >= totalPages.value) {
        currentPage.value = totalPages.value;
      } else {
        currentPage.value++;
      }
    }

    function previousPage() {
      if (currentPage.value <= 1) {
        currentPage.value = 1;
      } else {
        currentPage.value--;
      }
    }

    function resetForm(obj) {
      for (const key in obj) {
        const value = obj[key];

        if (typeof value === "boolean") {
          obj[key] = false;
        }

        if (typeof value === "string") {
          obj[key] = "";
        }

        if (typeof value === "object" && value !== null) {
          obj[key] = {};
        }
      }

      currentPage.value = 1;
    }

    function resetAllForms(...objects) {
      objects.forEach((obj) => resetForm(obj));
    }

    return {
      currentPage,
      totalPages,
      formData,
      validForms,
      pageKeys,
      extraFields,
      isCurrentFormValid,
      nextPage,
      resetForm,
      resetAllForms,
      previousPage,
    };
  },
);
