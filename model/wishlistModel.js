import mongoose from "mongoose"
const wishlistSchema=new mongoose.Schema({
    hotelId:{type:String,required:true}

})
const wishlistModel=mongoose.model("wishlist",wishlistSchema)
export {wishlistModel}