import { useState } from 'react'
export default function useCounter() {
  const [addCount, initCounter] = useState({ counter: 0 })
  const onCounterClick = () => {
    initCounter({ counter: addCount.counter + 1 })
  }
  return { addCount, onCounterClick }
}