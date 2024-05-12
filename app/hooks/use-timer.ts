import { useState, useEffect } from 'react'

const useTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isActive])

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const startTimer = () => {
    setIsActive(true)
  }

  const pauseTimer = () => {
    setIsActive(false)
  }

  const resetTimer = () => {
    setTotalSeconds(0)
    setIsActive(false)
  }

  return {
    minutes,
    seconds,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  }
}

export default useTimer
