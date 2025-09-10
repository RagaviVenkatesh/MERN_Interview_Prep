// Convert a class component to a functional component with hooks.

import {useState} from "react";
export default function HookCounter(){ const [n,setN]=useState(0); return <button onClick={()=>setN(n+1)}>{n}</button>; }
