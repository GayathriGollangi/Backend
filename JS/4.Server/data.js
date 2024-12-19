const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/students",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('./db.json',"utf-8"));
    console.log(data.students);
    res.json(data.students);

});

app.listen(8070,()=>{
    console.log("server is running on port 8070");
})