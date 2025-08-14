import { userModel } from "../model/userModel.js"
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken"
const signUp=async (req, res) => {
        try {
            const newUser = new userModel({
                username: req.body.username,
                number: req.body.number,
                email: req.body.email,
                 password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
            })
            const saveUser=await newUser.save()
            saveUser ? res.status(201).json(saveUser) : res.status(501).json({msg:"error in adding a user"})

        }
        catch (err) {
            console.log(err)
        }

    }
const login=async(req,res)=>{
            try{
                const user=await userModel.findOne({number:req.body.number})
                if(!user)  return res.json({err:"Invalid Number"})
                
                const decryptPassword=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)
                if(decryptPassword!==req.body.password)     return res.status(401).json({err:"Invalid password"})
                
                const token=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)
                const {password,...rest}=user._doc

                res.json({...rest,token})
            }
            catch(err){
                console.log(err)
            }
        }
export {signUp,login}
