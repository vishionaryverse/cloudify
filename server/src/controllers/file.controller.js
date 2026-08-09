const {uploadFile}=require("../services/file.service");
const upload=async (req,res)=>{
    const result=await uploadFile("example-file");
    res.json(result);
};
module.exports={
    upload
};