import { categories } from "../data/category.js"
import { categoryModel } from "../model/categoryModel.js"
export const categoryImportController=async(req,res)=>{
            try{
                const categorydata=await categoryModel.insertMany(categories.data)
                res.json(categorydata)
            }
            catch(err){
                res.json({msg:"unable to add category to DB"})
                console.log
            }
        }