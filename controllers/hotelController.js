import { hotelModel } from "../model/hotelModel.js"
export const getHotel=async (req,res)=>{
            let hotelCategory=req.query.category
            let hotelData
            try{
                if(hotelCategory){
                    hotelData=await hotelModel.find({category:hotelCategory})
                }
                else{
                    hotelData=await hotelModel.find()
                }
                 
            return hotelData ? res.json(hotelData) : res.status(500).json({msg:"failed to fetch the data"})
            }
            catch(err){
                console.log(err)
               
        }
           
        }