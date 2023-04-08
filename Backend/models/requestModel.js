const { default: mongoose } = require("mongoose");
const mongoos=require("mongoose");

const requestSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"PLease enter your name "]
    },
    email:{
        type:String,
        required:[true,"PLease enter your email address"]    
    },
    address:{
        type:String
    },
    phoneNumber:{
        type:String,
        required:[true,"Please enter your phone number "]
    },
    request:{
        type:String,
        required:[true,"Please fill the request "]
    },
    id:{
        type:String 
    }
})


module.exports=mongoose.model("Requestorgan",requestSchema)