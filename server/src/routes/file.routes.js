const express=require("express");
const {upload}=require("../controllers/file.controller");
const uploadMiddleware = require("../middleware/upload.middleware");
const router=express.Router();
router.post("/",uploadMiddleware.single("file"),upload);
module.exports=router;