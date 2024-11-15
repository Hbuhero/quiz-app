import { createRouter, createWebHistory } from "vue-router";
import Card from "@/components/Card.vue";
import Home from "@/views/Home.vue";
import Question from "@/views/Question.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/:subjectId/questions",
            name: "questions",
            component: Question
        }
    ]
})

export default router