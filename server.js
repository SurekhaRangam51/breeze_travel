import express from 'express'
import cors from "cors"
import { configDotenv } from 'dotenv'
import  hotelRouter from "./routes/hotelRouter.js"
import  categoryRouter from "./routes/categoryRouter.js"
import detailImportRouter from "./routes/detailImportRouter.js"
import categoryImportRouter from "./routes/categoryImportRouter.js"
import singleHotelRouter from "./routes/singleHotelRouter.js"
import userRouter from "./routes/userRouter.js"
import wishlistRouter from "./routes/wishlistRouter.js"
import db_connection from './config/db.js'
configDotenv({
    path:"./.env"
})
db_connection()
const app=express()
const PORT=process.env.PORT 
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hi , welcome")
})
app.use("/api/hotelsdata",hotelRouter)
app.use("/api/getcategorydata",categoryRouter)
app.use("/api/posthotelsdata",detailImportRouter)
app.use("/api/postcategorydata",categoryImportRouter)
app.use("/api/hotelsdata",singleHotelRouter)
app.use("/api/auth",userRouter)
app.use("/api/wishlist",wishlistRouter)
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`Server is runnig on ${PORT}`)
})