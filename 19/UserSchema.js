// Define a Mongoose schema for User with name, email, and password.

const {Schema,model}=require("mongoose");
const userSchema=new Schema({ name:String, email:{type:String,unique:true}, password:String },{timestamps:true});
const User=model("User",userSchema);
