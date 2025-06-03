import api from "@/plugins/axios";

class AuthService {
  async login(token) {
    try {
      const response = await api.post("/usuario/insert", { token });
      return response.data;
    } catch (error) {
      console.error("O Login falhou:", error);
      throw error;
    }
  }
}

export default AuthService;
