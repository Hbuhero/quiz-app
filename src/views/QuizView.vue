<script setup>
    import {RouterView, useRoute, useRouter} from "vue-router";
    import quizes from "../data/quizes.json"
    import QuestionCard from "@/components/QuestionCard.vue";
    import Result from "@/components/Result.vue";
    import { computed, ref } from "vue";

    const route = useRoute()
    const currentQuestionIndex = ref(1)
    const correctQuestions = ref(0)
    

    const subjectId = parseInt(route.params.subjectId)
    const questions = quizes.find(quiz => quiz.id == subjectId).questions
    // this is computed because the index is changed but the question is not state hence it doesnt
    // hence the computed function helps make the question be computed whenever the index is changes making it a state
    const question = computed(() =>questions.find(q => q.id == currentQuestionIndex.value))
    const questionNumber = computed(() => `${currentQuestionIndex.value}/${questions.length}`)

    const saveOption = (isCorrect) => {
        currentQuestionIndex.value++
        if(isCorrect){
            correctQuestions.value++
        }
        
    }
    
    
</script>

<template>
    <main>
        <div class="quiz" v-if="currentQuestionIndex <= 3">
            <header>
                <p>Questions {{ questionNumber }}</p>
            </header>
            <div class="questions-container" >
                <QuestionCard 
                @selected-option="saveOption"
                :question="question" />
            </div>
        </div>
        
        <div class="result" v-show="currentQuestionIndex > 3">
            <Result :correctQuestions="correctQuestions" :totalQuestions="questions.length" />
        </div>

    </main>
</template>
<style scoped>
    main {
        width: 90%;
        max-width: 1200px;
        margin: 20px auto;
        padding: 20px;
        background: #ffffff; /* White background */
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    /* Header */
    header {
        text-align: center;
        padding: 10px 0;
        background: #007bff; /* Blue background */
        color: #ffffff; /* White text */
        border-radius: 8px 8px 8px 8px;
    }

    header p {
        font-size: 24px;
        font-weight: bold;
        ;
    }

    /* Questions container */
    .questions-container {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
    }

    /* Question card */
    

    .option-card.clicked {
        background-color: #d1e7dd; /* Greenish color to indicate selection */
        transform: scale(1.05); /* Slightly enlarge the card */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #007bff; /* Primary blue */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}    
</style>

<!-- 
    create a question view that will route to a specific questions view using RouterView
    the question links has to be children paths
-->
