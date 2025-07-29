import { categoryModel } from '../model/categoryModel.js'
export const getCategory=async(req,res)=>{
            try{
                const categoryData=await categoryModel.find()
                res.json(categoryData)
            }
            catch(err){
                res.status(404).json("Unable to fetch category data")
            }
        }