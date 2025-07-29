import express from "express"
import { categoryImportController } from "../controllers/categoryImportController.js"


const router = express.Router()

router.post("/", categoryImportController)


export default router