import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Dashboard.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "/personal-register",
      component: () => import("@/views/auth/PersonalRegister.vue"),
    },
    {
      path: "/enterprise-register",
      component: () => import("@/views/auth/EnterpriseRegister.vue"),
    },
  ],
});

export default router;
