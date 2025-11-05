import { ref, onMounted, onUnmounted } from 'vue'

export function useDateTime() {
  const currentDateTime = ref(new Date())

  let intervalId = null

  const updateDateTime = () => {
    currentDateTime.value = new Date()
  }

  const formatDateTime = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  onMounted(() => {
    intervalId = setInterval(updateDateTime, 1000)
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  return {
    currentDateTime,
    formatDateTime
  }
}
