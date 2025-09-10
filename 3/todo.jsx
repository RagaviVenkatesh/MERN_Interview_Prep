// Implement a to-do list with add, delete, and mark-as-done features.

import {useState} from "react";
export default function Todos(){
  const [text,setText]=useState(""); 
  const [items,setItems]=useState([]);
  const add=()=>text.trim()&&setItems([...items,{id:Date.now(),text,done:false}])||setText("");
  return (
    <>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {items.map(it=>(
          <li key={it.id}>
            <input type="checkbox" checked={it.done} onChange={()=>
              setItems(items.map(x=>x.id===it.id?{...x,done:!x.done}:x))
            }/>
            {it.text}
            <button onClick={()=>setItems(items.filter(x=>x.id!==it.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
