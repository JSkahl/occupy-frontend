import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePersonalRegisterForm = defineStore(
	"personalRegisterForm",
	() => {
		const currentPage = ref(1);
		const totalPages = ref(4);
		const isDriver = ref(false);

		function enableDriverPage() {
			if (isDriver) {
				return totalPages++;
			} else {
				return (totalPages.value = 4);
			}
		}

		const validForms = reactive({
			personalIdInfo: false,
			personalInfo: false,
			enterpriseInfo: false,
			driverInfo: false,
		});

		const pageKeys = [
			"personalIdInfo",
			"personalInfo",
			"enterpriseInfo",
			"driverInfo",
		];

		function isCurrentFormValid() {
			const key = pageKeys[currentPage.value - 1];
			return validForms[key];
		};

		const extraFields = reactive({
			confirmEmail: "",
			confirmSenha: "",
		});

		const formData = reactive({
			personalIdInfo: {
				email: "",
				emailValido: false,
				senha: "",
			},

			personalInfo: {
				nome: "",
				genero: "",
				documento: "",
				numero: "",
			},

			enterpriseInfo: {
				cidadeResidencia: {},
				empresaAfiliada: "",
				setorEmpresa: "",
			},

			driverInfo: {
				cnh: "",
				rntrc: "",
			},
		});

		function nextPage() {
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

		function resetForm() {
			for (key in formData) {
				const page = formData[key];
				for (field in page) {
					if (typeof page[field] === "string") {
						page[field] = "";
					}
					if (typeof page[field] === "object") {
						page[field] = {};
					}
				}
			}
			currentPage.value = 1;
		}

		return {
			currentPage,
			totalPages,
			nextPage,
			previousPage,
			formData,
			resetForm,
			enableDriverPage,
			validForms,
			extraFields,
			isCurrentFormValid,
		};
	},
);
