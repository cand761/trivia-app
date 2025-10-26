<script setup>
import useScore from '@/composables/useScore'

// Destructure composable
const { score } = useScore()
</script>

<template>
  <span class="font-bold text-white">
    MAIN SCORE: {{ score }}
  </span>
</template>

