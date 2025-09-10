// Add input validation (e.g., check if email is present in request body).

app.post("/signup",(req,res)=>{
  const {email}=req.body; if(!email) return res.status(400).json({error:"email required"});
  res.json({ok:true});
});
