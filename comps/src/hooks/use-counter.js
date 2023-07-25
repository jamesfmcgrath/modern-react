import { useState, useEffect } from 'react';

function useCounter() {
  // Set up some state for the counter
  const [count, setCount] = useState(0);

  // Create a function for incrementing the counter
  function increment() {
    setCount(count + 1);
  }

  // Use useEffect to update the document title
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return { count, increment };
}

export default useCounter;
