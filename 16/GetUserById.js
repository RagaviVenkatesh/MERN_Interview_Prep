// Create routes with route parameters (e.g., /users/:id).

app.get("/users/:id",(req,res)=>{ const u=users.find(x=>x.id==req.params.id); if(!u) return res.sendStatus(404); res.json(u); });
