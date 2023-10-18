import mongoose from "mongoose";

//Schema
const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
        unique:true,
    },
    visitHistory: [{timestamp:{type:Number}}],
},{timestamps:true}
);



//Model
const URL=mongoose.model("url",urlSchema);
export default URL;