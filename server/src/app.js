const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("cloudify backedn running");
})
module.exports=app;
