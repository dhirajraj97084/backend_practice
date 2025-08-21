import express from "express";
import { User } from "../models/user.models.js";

const router= express.Router();

router.get("/",(req,res)=>{
    res.json({message:"Welcome to Home Auth Api"});
})

// create a user
router.post("/login",async(req,res)=>{
    const {name ,email,password}=req.body;
    try {
        if(!name || !email || !password){
           res.status(400).json({error:"please fill the all the fields"});
        }

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
// find all users
router.get("/users",async(req,res)=>{
    try {
       const user= await User.find();
       res.status(200).json({users:user});
        } catch (error) {
        res.status(500).json({error:error.message});
    }
})
//delete all user
router.delete("/:id",async(req,res)=>{
    try {
      const deletedUser=await User.findByIdAndDelete(req.params.id);
      if(!deletedUser){
        res.status(404).json({error:"user not dound"});
      }
      res.status(200).json({message:"User Deleted Successfully",deletedUser});  
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

export default router;