import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({

    category:{type:String,requierd:true}
})
const categoryModel=mongoose.model("category",categorySchema)
export {categoryModel}