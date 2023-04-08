// const { default: mongoose } = require("mongoose");
const mongoose=require("mongoose");

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"PLease enter your name "]
    },
    email:{
        type:String,
        required:[true,"PLease enter your email address"]    
    },
    phoneNumber:{
        type:Number,
        required:[true,"Please enter your phone number "]
    },
    address:{
        type:String,
        required:[true,"Please enter your blood group"]
    },
    organ:{
        type:Array,
        required:[true,"Please enterthe list of organs "]
    },
    blood:{
        type:Array,
        required:[true,"Please enter the list of blood deal with "]
    },
    id:{
        type:String
    }
})


module.exports=mongoose.model("Hospital",hospitalSchema)