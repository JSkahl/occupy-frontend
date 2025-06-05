import { ref } from 'vue';
import loginService from '@/services/auth/auth';

export function useAuthStore() {
  const user = ref(null);
  const token = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function login(email, password) {
    loading.value = true;
    error.value = null;

    try {
      const data = await loginService(email, password);
      token.value = data.token;
      user.value = data.user;
    } catch (err) {
      console.error(err);
      error.value = err.response?.data?.message || err.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    user,
    token,
    loading,
    error,
    login
  };
}
