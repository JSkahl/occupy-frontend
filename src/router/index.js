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
  ],
});

export default router;
