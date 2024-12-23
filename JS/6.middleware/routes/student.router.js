const express = require("express");

const studentRoute = express.Router();

studentRoute.get("/",(req,res)=>{
    res.send("Hello Student");
})
studentRoute.post("/addstudent",(req,res)=>{
    console.log(req.body);
    res.send("Student Added");
})
module.exports = {studentRoute,};