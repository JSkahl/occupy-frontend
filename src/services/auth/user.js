import api from "@/plugins/axios";

export default async function createUser(formData) {
  try {
    const response = await api.post("/usuario/login/insert", formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
