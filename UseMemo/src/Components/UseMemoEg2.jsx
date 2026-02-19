import React from 'react'
import { useMemo, useState } from "react";

const UseMemoEg2 = () => {
   const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <>
      
      <h2>count:{count}</h2>
      <h2>Square: {squared}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </>
  );
}
export default UseMemoEg2
