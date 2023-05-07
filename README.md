# React-Custom-Hooks

- **useDebounce**:

```jsx
import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState < T > value;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

- **useBoolean**:

```jsx
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface UseBooleanOutput {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
}

export default useBoolean;
```

- **useCounter**:

```jsx
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
```
