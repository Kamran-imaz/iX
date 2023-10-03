const express=require('express')
const router=express.Router()
const User=require('../models/cedb')
router.get('/',async(req,res)=>{
    try{
        const {state,city,category}=req.query
        const checkData=await User.find({
            state,city,category
        }).sort({rating:-1})
        console.log(checkData)
        res.json(checkData)
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router