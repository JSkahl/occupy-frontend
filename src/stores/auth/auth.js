import { ref } from "vue";
import { defineStore } from "pinia";

import { hashPassword, generateJWT } from "@/utils";
import { AuthService } from "@/services";

export const useAuthStore = defineStore("auth", () => {
  const secret = import.meta.env.JWT_SECRET_KEY
  const jwt = ref(null)
  const email = ref(null)
  const password = ref(null)

  async function login(user, pwd) {
    const hashedPassword = hashPassword(pwd)
    const token = generateJWT({user, hashedPassword}, secret)

    try {
      const data = await AuthService.login(token)

      jwt.value = data.jwt
      email.value = data.email
      password.value = data.password

      localStorage.setItem('token', data.jwt)
      console.log('Login sucedido')
    } catch (error) {
      console.error('Login mau sucedido na store: ', error)
    }
  }

  function logout() {
    jwt.value = null
    email.value = null
    password.value = null
    localStorage.removeItem('token')
  }

  function isAuth() {
    return !!jwt.value
  }

  return {
    jwt,
    email,
    password,
    login,
    logout,
    isAuth,
  }
})
