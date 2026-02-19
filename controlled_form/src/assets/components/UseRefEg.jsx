import { useRef, useState,useEffect } from 'react'

const UseRefEg = () => {
    const [count,setCount] = useState(0)
    const prevCount = useRef(0);
 useEffect(() => {
    prevCount.current = count;
  });

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default UseRefEg
