//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  req.session.uid=null;
  //console.log(req.session);
  res.send(JSON.stringify({code:1,msg:"已退出登录"}))
});

module.exports=router;