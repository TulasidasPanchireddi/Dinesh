import { useState } from "react";

export function counterHook(val){
    let [count,setCount] = useState(val)
    return [count,setCount];
}