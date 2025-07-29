import express from "express"
import { getHotel } from "../controllers/hotelController.js"


const router=express.Router()
router.get("/",getHotel)
        

export default router