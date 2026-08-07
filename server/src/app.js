const express=require("express");
const logger = require("./middleware/logger.middleware");
const app=express();
app.use(logger);
app.get("/",(req,res)=>{
    res.send("cloudify backedn running");
})
module.exports=app;
