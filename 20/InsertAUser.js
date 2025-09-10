// Insert a new user into MongoDB.

await User.create({name:"Alice",email:"a@a.com",password:"hash"});
