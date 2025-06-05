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
		}

		const extraFields = reactive({
			confirmEmail: "",
			confirmSenha: "",
		});

const formData = reactive({
  celular: "",
  cidadeResidencia: {},
  cnh: "",
  documento: "",
  email: "",
  emailValido: false,
  empresaAfiliada: "",
  genero: "",
  nome: "",
  rntrc: "",
  senha: "",
  setorEmpresa: ""
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
			formData.email = "";
			formData.emailValido = false;
			formData.senha = "";
			formData.nome = "";
			formData.genero = "";
			formData.documento = "";
			formData.celular = "";
			formData.cidadeResidencia = {}; // Reset to empty object
			formData.empresaAfiliada = "";
			formData.setorEmpresa = "";
			formData.cnh = "";
			formData.rntrc = "";
      extraFields.confirmEmail = "";
      extraFields.confirmSenha = "";
      validForms.personalIdInfo = false;
      validForms.personalInfo = false;
      validForms.enterpriseInfo = false;
      validForms.driverInfo = false;

			currentPage.value = 1;
      isDriver.value = false;
      isCurrentFormValid();
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
