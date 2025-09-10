// Create a simple counter app with increment, decrement, and reset buttons.

import { useState } from "react";
export default function Counter(){
  const [n,setN]=useState(0);
  return (
    <div>
      <h1>{n}</h1>
      <button onClick={()=>setN(n+1)}>+</button>
      <button onClick={()=>setN(n-1)}>-</button>
      <button onClick={()=>setN(0)}>Reset</button>
    </div>
  );
}
