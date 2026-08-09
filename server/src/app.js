const express=require("express");
const logger = require("./middleware/logger.middleware");
const app=express();
const fileRoutes=require("./routes/file.routes");
app.use(logger);
app.use("/api/files",fileRoutes);
app.get("/",(req,res)=>{
    res.send("cloudify backedn running");
})
module.exports=app;
