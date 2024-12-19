const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(8070,()=>{
    console.log("Server is running on port 8070");
    })