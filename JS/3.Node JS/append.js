const fs = require("fs");

fs.appendFile("./text.txt","It is used to write in file",(err)=>{
    if(err){
        console.log(err);
        console.log('cannot  to write document');
    }
    else{
        console.log("data is added");
    }
})