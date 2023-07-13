const express = require('express')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { UserModel } = require('../Modals/User.model');

const userRoutes = express.Router()

userRoutes.post("/signup", async(req,res)=>{
    const {email,password} = req.body
    try {
        let user = await user.findOne({ email: email})
        if(user){
            res.status(200).json({msg:"user already registered"})
        }else{
            bcrypt.hash(password, 5, async(err, hash)=>{
                // Store hash in your password DB.
                const user = await UserModel({email, password:hash})
                await user.save()
                res.status(200).json({msg: "User successfully registered"})
            });
        }
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})

userRoutes.post("/login", async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=> {
                if(result){
                    var token = jwt.sign({ userid: user._id,creator:user.email }, 'masai');
                    res.status(200).json({msg:"Login successful", "token": token});
                }else{
                    res.status(400).json({msg:"Wrong credentials"})
                }
            });
        }else{
            res.status(400).json({msg:"Wrong credentials"})
        }
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})


module.exports = {userRoutes}