import express from "express";
import { User } from "../models/user.models.js";

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({message:"Welcome to Home Auth Api"});
})
router.post("/login",async(req,res)=>{
    const {name ,email,password}=req.body;
    try {
        if(!name || !email || !password){
           res.status(400).json({error:"please fill the all the fields"});
        }
        const user=await User.findOne({email});
         
        const newUser=await User({
            name,
            email,
            password            
        })  
        await newUser.save();
        res.status(200).json({message:"User Created Successully"}); 
    } catch (error) {       
       res.status(500).json({error:"Internal server Error"});
    }
})
router.get("/register",(req,res)=>{
    res.json({message:"Welcome to Register Auth Api"});
})

export default router;