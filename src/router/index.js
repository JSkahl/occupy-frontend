import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/layout/layouts/Layout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("@/views/Dashboard.vue"),
                },
                // CRUD Vehicle
                {
                    path: "equipment-rent",
                    component: () => import("@/views/equipment/rent/RentVehicle.vue"),
                },
                {
                    path: "equipment-register",
                    component: () => import("@/views/equipment/register/RegisterEquipment.vue"),
                },
            ],
        },

        {
            path: "/login",
            component: () => import("@/views/auth/Login.vue"),
        },
        {
            path: "/register",
            component: () => import("@/views/auth/RegisterSelector.vue"),
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
