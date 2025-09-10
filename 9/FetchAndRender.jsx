// Fetch data from a public API (e.g., JSONPlaceholder) and render in a table.

import {useEffect,useState} from "react";
export default function Users(){
  const [data,setData]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{(async()=>{const r=await fetch("https://jsonplaceholder.typicode.com/users"); setData(await r.json()); setLoading(false);})();},[]);
  if(loading) return <p>Loading...</p>;
  return <table><tbody>{data.map(u=><tr key={u.id}><td>{u.name}</td><td>{u.email}</td></tr>)}</tbody></table>;
}
