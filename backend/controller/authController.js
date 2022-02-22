import express from "express";
import Users from "../model/Usermodel.js";

const HandleErrors =(error)=>{
  
    let Errors = {email:"", password:""}
    if(error.code === 11000){
        Errors.email = "That Email is already resgitered"
        return Errors
    }
    if(error.message.includes("Users validation failed")) {
        Object.values(error.errors).forEach(({properties})=>{
            Errors[properties.path] = properties.message  
        }) 
    }
    return Errors
   
}

export const signin_get = async(req,res) => {
    try {
        res.json({
            key : "sick"
        })
    } catch (error) {
        console.log(error)
    }
}

export const signin_post = async(req,res) => {
    try {
        const {email,password} = req.body
        const UserAuth = await Users.create({email,password})
        res.json(UserAuth)
        
    }catch (error) {
        const Errors= HandleErrors(error)
        res.status(400).json({Errors})
    }
}


