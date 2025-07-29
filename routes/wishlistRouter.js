import express from "express"
import { authVerify } from "../middleware/authVerify.js"
import { addToWishlist, deleteWishlist, getWishlist } from "../controllers/wishlistController.js"
const router=express.Router()
router.post("/addtowishlist",authVerify,addToWishlist)
router.get("/getwishlist",authVerify,getWishlist)
router.delete("/deletewishlist/:id",authVerify,deleteWishlist)
export default router