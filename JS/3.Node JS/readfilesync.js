const fs = require("fs");

try{
    const data = fs.readFileSync("./text.txt",{encoding:"utf-8"});
    console.log(data);
}
catch(err){
    console.log(err);
}
