const mongoose=require('mongoose')
const {Schema}=mongoose
const userSchema=mongoose.Schema({
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    categoryName:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    count:{
        type:Number,
        default:0,
    }
})

module.exports=mongoose.model('cedb',userSchema)