const express = require("express");
const { studentRoute } = require("./routes/student.router");
const { teacherRoute } = require("./routes/teacher.router");


const app = express();
app.use(express.json());

app.use("/students",studentRoute);
app.use("/teachers",teacherRoute);
app.get("/",(req,res)=>{
    res.send("Welcome to the Home");
});

app.listen(8070,()=>{
    console.log("Server is running on port 8070");
})