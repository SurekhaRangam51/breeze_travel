import express from "express"

import { singleHotelController } from "../controllers/singleHotelController.js"
const router=express.Router()
router.get("/:id",singleHotelController)
        
export default  router