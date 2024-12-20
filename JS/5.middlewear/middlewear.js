const watchMan = (req,res,next)=>{
    if(req.url === "/about"){
        next();
    }
    else{
        res.send(bye);
    }
}
module.exports = {watchMan};