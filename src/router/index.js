import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "@/views/404View.vue";
import Home from "@/views/Home.vue";
import QuizView from "@/views/QuizView.vue";
import QuestionCard from "@/components/QuestionCard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"  // redirects the path above to the path below
        },
        {
            path: "/:subjectId/questions",
            name: "questions",
            component: QuizView,
            
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router