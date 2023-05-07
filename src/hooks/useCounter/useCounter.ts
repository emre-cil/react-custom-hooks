import { useState, Dispatch, SetStateAction } from 'react';

interface UseCounterOutput {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

function useCounter(initialValue = 0): UseCounterOutput {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((x) => x + 1);
  const decrement = () => setCount((x) => x - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}

export default useCounter;
