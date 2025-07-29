import mongoose from "mongoose"
const db_connection=async ()=>{
    try{
       await mongoose.connect(process.env.DATABASE_URL)
        console.log("Successfully connectd the database")
    }
    catch(err){
        console.log("error",err.message)
    }
}
export default db_connection;