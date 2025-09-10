// Create a REST API with GET /users returning dummy JSON data.

app.get("/users",(_,res)=>res.json([{id:1,name:"Alice"}]));
