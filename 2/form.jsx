import { useState } from "react";
export default function Form(){
  const [form,setForm]=useState({name:"",email:""});
  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});
  return (
    <>
      <input name="name" value={form.name} onChange={onChange} />
      <input name="email" value={form.email} onChange={onChange} />
      <p>{form.name} — {form.email}</p>
    </>
  );
}
