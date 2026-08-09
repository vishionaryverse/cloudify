const express=require("express");
const {upload}=require("../controllers/file.controller");
const router=express.Router();
router.post("/",upload);
module.exports=router;