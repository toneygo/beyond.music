//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.post("/",(req,res)=>{
  var uid=req.session.uid;
  res.send(JSON.stringify({code:-1,msg:"未完成接口"}))
})

module.exports=router;