//Update users email id using their id

await User.findByIdAndUpdate(id,{email:"new@mail.com"},{new:true});
