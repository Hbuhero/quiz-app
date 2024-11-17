<script setup>
    import { defineProps } from 'vue';

    const {correctQuestions, totalQuestions} = defineProps(['correctQuestions', 'totalQuestions'])
    const retryQuiz = () => {
        window.location.reload()
    }
</script>


<template>
    <div class="result-container">
      <h2 class="result-title">Quiz Completed!</h2>
      <p class="result-message">Congratulations! You've completed the quiz.</p>
  
      <div class="score-summary">
        <p class="score">
          You answered <span class="correct-answers">{{ correctQuestions }}</span> out of 
          <span class="total-questions">{{ totalQuestions }}</span> questions correctly.
        </p>
        
      <button @click="retryQuiz" class="retry-button">Retry Quiz</button>
      </div>
    </div>

  </template>

<style scoped>
.result-container {
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.result-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.result-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.score-summary {
  margin-top: 20px;
}

.score {
  font-size: 20px;
  color: #333;
}

.correct-answers {
  font-weight: bold;
  color: #4caf50;
}

.total-questions {
  font-weight: bold;
  color: #333;
}

.performance-message {
  font-size: 18px;
  margin-top: 10px;
}

.performance-message.excellent {
  color: #4caf50;
  font-weight: bold;
}

.performance-message.great {
  color: #ff9800;
}

.performance-message.good {
  color: #2196f3;
}

.performance-message.try-again {
  color: #f44336;
}

.retry-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.retry-button:hover {
  background-color: #1976d2;
}
</style>