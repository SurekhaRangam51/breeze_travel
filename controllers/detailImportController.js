import { hotels } from "../data/hotels.js"
import { hotelModel } from "../model/hotelModel.js"
export const detailImportController=async(req,res)=>{
            try{
               const hotelInDb= await hotelModel.insertMany(hotels.data)
               res.json(hotelInDb)
            }
            catch(err){
                console.log(err)
                res.json({msg:"could not add to database"})
            }
        }