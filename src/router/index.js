import { createRouter, createWebHistory } from "vue-router";
import Testing from "@/components/Testing.vue";
import Card from "@/components/Card.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/testing",
            name: "testing",
            component: Testing
        }
    ]
})

export default router