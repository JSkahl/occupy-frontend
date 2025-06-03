import { defineStore } from "pinia";
import { ref } from "vue";
import { hashPassword } from "@/utils/hasher";
import generateJWT from "@/utils/jwt";
import AuthService from "@/services/auth";

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
      console.log('Login sucedido')
    } catch (error) {
      console.error('Login mau sucedido na store: ', error)
    }
  }

  function logout() {
    jwt.value = null
    email.value = null
    password.value = null
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
