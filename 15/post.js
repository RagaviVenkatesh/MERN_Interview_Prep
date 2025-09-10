// Implement POST /users to add a new user to memory.

app.use(express.json());
const users=[];
app.post("/users",(req,res)=>{ const u={id:Date.now(),...req.body}; users.push(u); res.status(201).json(u); });
