const express = require("express");

const teacherRoute = express.Router();

teacherRoute.get("/",(req,res)=>{
    res.send("Hello teacher");
})
teacherRoute.post("/addteacher",(req,res)=>{
    console.log(req.body);
    res.send("Teacher Added");
})
module.exports = {teacherRoute,};