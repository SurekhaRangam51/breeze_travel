import { hotelModel } from "../model/hotelModel.js"
export const singleHotelController=async(req,res)=>{
            try{
                const {id}=req.params
                const hotel=await hotelModel.findById(id)
                return res.json(hotel)
            }
            catch(err){
                return res.status(404).json({msg:"no data found"})
            }

        }