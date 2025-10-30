import  * as mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
    UserId?:string;
    email?:string;
    name?:string;
    password?:string;
    Avatar?:string;
    createdAt:Date;
    picture?:string;
}

const userSchema=new mongoose.Schema({
    UserId:{type:String, required:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:false},
    Avatar:{type:String,required:false},
    name:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    picture:{type:String,required:false}
})
const User = mongoose.model("User", userSchema);
export default User;
