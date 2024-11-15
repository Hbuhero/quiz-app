<script setup>
    import {useRoute, useRouter} from "vue-router";
    import quizes from "../data/quizes.json"
    import { ref } from "vue";

    const route = useRoute()
    const router = useRouter()
    const answers = ref(
        [
            {
                questionId: 1,
                optionId: 0,
                isCorrect: false
            }
        ]
    )
    const result = ref(0)
    

    const subjectId = route.params.subjectId
    const questions = quizes.find(quiz => quiz.id == parseInt(subjectId)).questions
    
    const saveAnswer = (question, option) => {
        if (answers.value.find(answer => answer.questionId == question.id) === undefined){
            let selectedOption = ({
                questionId: question.id,
                optionId: option.id,
                isCorrect: option.isCorrect
            })
            answers.value.push(selectedOption)
            
            
            
        }else{
            answers.value.find(answer => answer.questionId == question.id).optionId = option.id
            answers.value.find(answer => answer.questionId == question.id).isCorrect = option.isCorrect
            console.log(answers.value)
        }
       
       
         
    }

    const submit = () => {
        if(answers.value.length < 3){
            window.alert("answer all questions")
            return
        }
        result.value = answers.value.filter(answer => answer.isCorrect == true).length
        console.log(result.value);
         
    }

</script>

<template>
    <main>
        <header>
            <p>Questions</p>
        </header>
        <div class="questions-container">
            <div class="question-card" v-for="question in questions">
                <h1>{{ question.text }}</h1>
                <div 
                class="option-card" 
                @click="saveAnswer(question, option)" v-for="option in question.options"
                >
                    <p>{{ option.label }}:    {{ option.text }}</p>
                </div>
            </div>
        </div>
        <button @click="submit">Submit</button>
        
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
        border-radius: 8px 8px 0 0;
    }

    header p {
        font-size: 24px;
        font-weight: bold;
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
    .question-card {
        width: 100%;
        max-width: 500px;
        background: #ffffff; /* White background */
        border: 1px solid #dee2e6; /* Light border */
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
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

    .option-card.clicked {
        background-color: #d1e7dd; /* Greenish color to indicate selection */
        transform: scale(1.05); /* Slightly enlarge the card */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    
</style>
