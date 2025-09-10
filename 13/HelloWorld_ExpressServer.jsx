// Set up a simple Express server and return “Hello World”.

const express=require("express"); const app=express();
app.get("/",(_,res)=>res.send("Hello World"));
app.listen(3000,()=>console.log("http://localhost:3000"));
