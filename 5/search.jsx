// Add search functionality to filter users in that list.

import {useState} from "react";
const USERS=[{id:1,name:"Alice"},{id:2,name:"Bob"}];
export default function Search(){
  const [q,setQ]=useState("");
  const list=USERS.filter(u=>u.name.toLowerCase().includes(q.toLowerCase()));
  return (<>
    <input placeholder="search" value={q} onChange={e=>setQ(e.target.value)} />
    <ul>{list.map(u=><li key={u.id}>{u.name}</li>)}</ul>
  </>);
}
