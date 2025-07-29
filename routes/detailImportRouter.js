import express from "express"
import { detailImportController } from "../controllers/detailImportController.js"

const router=express.Router()
router.post("/",detailImportController)
        
export default router
