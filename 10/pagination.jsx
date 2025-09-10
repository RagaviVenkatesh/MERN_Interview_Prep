// Implement pagination for a list of items.

import {useState} from "react";
const items=Array.from({length:42},(_,i)=>`Item ${i+1}`);
export default function Pager(){
  const [page,setPage]=useState(1); const size=5;
  const slice=items.slice((page-1)*size,page*size);
  const pages=Math.ceil(items.length/size);
  return (<>
    <ul>{slice.map(x=><li key={x}>{x}</li>)}</ul>
    <button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
    <span>{page}/{pages}</span>
    <button disabled={page===pages} onClick={()=>setPage(p=>p+1)}>Next</button>
  </>);
}
