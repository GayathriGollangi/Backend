const fs = require("fs");

fs.readFile("./text.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log(err);
        console.log('unable to read document');
    }
    else{
        console.log(data);
    }
})