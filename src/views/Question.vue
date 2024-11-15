<script setup>
    import {RouterView, useRoute, useRouter} from "vue-router";
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
    let questionId = route.params.questionId
    const questions = quizes.find(quiz => quiz.id == parseInt(subjectId)).questions
    
    console.log(questionId)
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

    const next = () => {
        return router.push(`/${subjectId}/question/${questionId++}`)
    }

    const previous = () => {
        
    }
</script>

<template>
    <main>
        <header>
            <p>Questions</p>
        </header>
            <RouterView />
            <div class="buttons">
                <button>Previous</button>
                <button @click="next">Next</button>
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
