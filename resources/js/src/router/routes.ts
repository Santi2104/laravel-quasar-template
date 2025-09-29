import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    // Rutas para usuarios no autenticados (con GuessLayout)
    {
        path: "/",
        component: () => import("../layout/GuessLayout.vue"),
        children: [
            {
                path: "",
                name: "welcome",
                component: () => import("../pages/WelcomePage.vue"),
            },
            {
                path: "/login",
                name: "login",
                component: () => import("../pages/auth/LoginPage.vue"),
            },
            {
                path: "/register",
                name: "register",
                component: () => import("../pages/auth/RegisterPage.vue"),
            },
        ],
    },

    // Rutas para usuarios autenticados (sin layout por ahora)
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../pages/WelcomePage.vue"), // Temporal
        meta: {
            requiresAuth: true,
        },
    },
];

export default routes;
