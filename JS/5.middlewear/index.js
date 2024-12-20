const express = require("express");

const app = express();

// app.use((req,res,next)=>{
//     console.log("Hello from middleware");
//     next();
// })

app.use((req,res,next)=>{
    const startTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    console.log(endTime-startTime);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
    console.log("base");
})
app.get("/about",(req,res)=>{
    res.send("About");
    console.log("about");
})
app.get("/blog",(req,res)=>{
    res.send("Blog");
    console.log("blog");
})
app.listen(8070,()=>{
    console.log("Server is running on port 8070");
})