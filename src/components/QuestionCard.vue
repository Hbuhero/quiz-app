<script setup>
    import {RouterView, useRoute, useRouter} from "vue-router";
    import quizes from "../data/quizes.json"
import { ref } from "vue";

    const route = useRoute()
    const router = useRouter()
    

    const subjectId = route.params.subjectId
    const questionId = route.params.questionId
    const question = quizes.find(quiz => quiz.id == parseInt(subjectId)).questions.find( question => question.id == parseInt(questionId))
</script>

<template>
    <div class="question-card" :key="route.params.questionId">
                <h1>{{ question.text }}</h1>
                <div 
                class="option-card" 
                @click="saveAnswer(question, option)" v-for="option in question.options"
                >
                    <p>{{ option.label }}:    {{ option.text }}</p>
                </div>
            </div>
</template>

<style scoped>
.question-card {
        width: 100%;
        max-width: 500px;
        background: #ffffff; /* White background */
        border: 1px solid #dee2e6; /* Light border */
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-top: 8px; /* Subtle shadow */
        margin-bottom: 8px;
    }

    .question-card h1 {
        font-size: 18px;
        color: #007bff; /* Blue text for questions */
        margin-bottom: 15px;
    }

    /* Option card */
    .option-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        background: #f1f3f5; /* Light gray background for options */
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #e9ecef;
    }

    .option-card p {
        margin: 0;
        font-size: 14px;
        color: #495057; /* Medium gray text */
    }

    /* Hover effects */
    .option-card:hover {
        background: #e9ecef; /* Slightly darker gray on hover */
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
</style>