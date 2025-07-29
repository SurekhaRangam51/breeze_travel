import { wishlistModel } from "../model/wishlistModel.js"

const addToWishlist=async(req,res)=>{
     const wishlist= new wishlistModel(req.body)
    
    try{
       
        const saveWishlist=await wishlist.save()
        res.status(201).json({msg:"successfully added"}) 
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Error in ading a wishlist"})
    }
}
const getWishlist=async(req,res)=>{
    try{
        const wishlistData=await wishlistModel.find()
        res.json(wishlistData)

    }
    catch(err){
        console.log(err)
        res.status(500).json({err:"Error in getting a wishlist"})
    }
}
const deleteWishlist=async(req,res)=>{
    try{
        await wishlistModel.findByIdAndDelete(req.params.id)
        res.json({msg:"successfully deleted"})
    }
    catch(err){
         console.log(err)
        res.status(500).json({err:"Error in deleting a wishlist"})
    }
}
export {addToWishlist,getWishlist,deleteWishlist}