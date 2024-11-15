import { createRouter, createWebHistory } from "vue-router";
import Card from "@/components/Card.vue";
import Home from "@/views/Home.vue";
import Question from "@/views/Question.vue";
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
            path: "/:subjectId/question",
            name: "questions",
            component: Question,
            children: [
                {
                    path: ":questionId",
                    component: QuestionCard
                }
            ]
        }
    ]
})

export default router