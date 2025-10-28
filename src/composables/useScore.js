import { ref } from 'vue'

const score = ref(0)

export function useScore() {
  const changeScore = (points) => {
    score.value += points
  }
  return { score, changeScore }
}
