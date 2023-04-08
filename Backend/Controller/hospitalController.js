
const Hospital=require("../models/hospitalsModel");

const nodemailer=require("nodemailer")


const Requestorgan=require("../models/requestModel")

exports.addHospitals=async(req,res,next)=>{
    const {name ,email,phoneNumber,address,organ,blood}=req.body;
    const hospital=await Hospital.create({
        name,
        email,phoneNumber,address,organ,blood
    })
    res.status(200).json({
        success:true,
        hospital
    })

}
//Get all hosptials
exports.allHospitals=async(req,res,next)=>{
    const hospital= await Hospital.find()
    res.status(200).json({
        success:true,
        hospital

    })
}
//Get one hospital
exports.singlehospital=async(req,res,next)=>{
    console.log(req.params.id)
    const hospital=await Hospital.find({id:req.params.id})
    res.status(200).json({
        success:true,
        hospital
    })
    
}

// send mail to hospital to volenter as a donar 
exports.requestHospitals=async (req,res,next)=>{
    const {name,phonenumber,email,address, organ ,bloodGroup,description}=req.body;
    const hospitalMail = req.params.email;
    const message=`${name} wants to donate organ :-\nName:-${name}\n
     Phone Number:-${phonenumber}\n
     Address:-${address}\n
     Organ :-${organ}\n
     Blood Group :-${bloodGroup}\n
     Description :-${description}
    `

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'marcelina.heller@ethereal.email',
            pass: 'd8NvXWwRCpCxAEz7Zv'
    
        },
      });

    let info = await transporter.sendMail({
        from: '"Abbhishek Naula"<naulaabhishek5@gmail.com>', // sender address
        to: `${hospitalMail}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
        html:  message, // html body
      });

 console.log("Message sent :%s",info.messageId);
 res.json(info);     
}

// send mail to all to volentar as a donar 
exports.requestAllHospitals=async (req,res,next)=>{
    const {name , phoneNumber,email,address, organ ,bloodGroup,description}=req.body;
    const message=`${name} wants to donate organ :-\nName:-${name}\n
     Phone Number:-${phoneNumber}\n
     Email:-${email}\n
     Address:-${address}\n
     Organ :-${organ}\n
     Blood Group :-${bloodGroup}\n
     Description :-${description}
    `

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'marcelina.heller@ethereal.email',
            pass: 'd8NvXWwRCpCxAEz7Zv'
    
        },
      });

    let info = await transporter.sendMail({
        from: '"Abbhishek Naula"<naulaabhishek5@gmail.com>', // sender address
        to: "abhiseknaulae@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
        html:  message, // html body
      });
 const requestorgan = await Requestorgan.create({
    name,email,address,phoneNumber,
    request:`Organ ${organ},blood ${bloodGroup}`
    ,id:`${name}${new Date()}`

 })
 res.status(200).json({
    success:true,
    requestorgan
 })     
}


//send mail for organ request to one  hospital
exports.requestOrgan=async (req,res,next)=>{
    const {name , phoneNumber,email,address, organ ,bloodGroup,description}=req.body;
    const hospitalMail = req.params.email;
    const message=`${name} wants to requested for  organ :-\nName:-${name}\n
     Phone Number:-${phoneNumber}\n
     Email:-${email}\n
     Address:-${address}\n
     Organ :-${organ}\n
     Blood Group :-${bloodGroup}\n
     Description :-${description}
    `

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'marcelina.heller@ethereal.email',
            pass: 'd8NvXWwRCpCxAEz7Zv'
    
        },
      });

    let info = await transporter.sendMail({
        from: '"Abbhishek Naula"<naulaabhishek5@gmail.com>', // sender address
        to: `${hospitalMail}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
        html:  message, // html body
      });
 res.status(200).json({
    success:true,
    info
 })
}


//send mail for organ request to all hospital
exports.requestOrganAll=async (req,res,next)=>{
    const {name , phoneNumber,email,address, organ ,bloodGroup,description}=req.body;
    const message=`${name} wants to requested for  organ :-\nName:-${name}\n
     Phone Number:-${phoneNumber}\n
     Email:-${email}\n
     Address:-${address}\n
     Organ :-${organ}\n
     Blood Group :-${bloodGroup}\n
     Description :-${description}
    `
    const hospitalList = await Hospital.find();
    let mail= " "
    const lst=hospitalList.forEach(hospital=>{
        mail=`${mail},${hospital.email}`
    })
    maillist=mail.slice(2)  
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'marcelina.heller@ethereal.email',
            pass: 'd8NvXWwRCpCxAEz7Zv'
    
        },
      });

    let info = await transporter.sendMail({
        from: '"Abbhishek Naula"<naulaabhishek5@gmail.com>', // sender address
        to: `${maillist}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: message, // plain text body
        html:  message, // html body
      });

      const requestorgan = await Requestorgan.create({
        name,email,address,phoneNumber,
        request:`Organ ${organ},blood ${bloodGroup}`
        ,id:`${name}${new Date()}`
    
     })
 res.status(200).json({
    success:true,
    info
 })
}

//Get orgon donation request 

exports.getAllRequest=async(req,res,next)=>{
    const request= await Requestorgan.find()
    res.status(200).json({
        success:true,
        request
    })
}

