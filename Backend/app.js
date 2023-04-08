const express=require('express')
const app=express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const user=require("./Route/userRoute")
const hospital=require("./Route/hospitalRoute")
app.use("/api",user);
app.use("/api",hospital);

module.exports=app;