const { default: mongoose } = require("mongoose");
const mongoos=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"PLease enter your name "]
    },
    password:{
        type:String,
        require:[true,"Please enter the password"]
    },
    email:{
        type:String,
        required:[true,"PLease enter your email address"]    
    },
    phoneNumber:{
        type:Number,
        required:[true,"Please enter your phone number "]
    },
    bloodGroup:{
        type:String,
        required:[true,"Please enter your blood group"]
    },
    requested:[
        {

            requesType:{
                type:String,
            },
            hospital:{
                type:String
            },

        }
    ],
    accepted:[{
        hospital:{
            type:String
        },
        organ:{
            type:String
        },
        blood:{
            type:String 
        }
    }],
})


module.exports=mongoose.model("User",userSchema)