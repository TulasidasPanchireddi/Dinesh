import { useCallback, useState } from "react";

const UseCallbackEg1 = ()=>{
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </>
  );
}
export default UseCallbackEg1
