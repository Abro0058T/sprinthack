const User=require("../models/userModel");



//Register user 
exports.registerUser=async(req,res,next)=>{
    const {name,email,phoneNumber ,bloodGroup}=req.body;

    const user= await User.create({
        name,email,phoneNumber,bloodGroup
    })
    res.status(200).json({
        success:true,
        user
    })
}
