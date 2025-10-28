<!-- src/components/MainScore.vue -->
<template>
  <div class="text-4xl font-bold text-center">
    MAIN SCORE: {{ score }}
  </div>
</template>

<script setup>
import { useScore } from '../composables/useScore'
const { score } = useScore()
</script>
