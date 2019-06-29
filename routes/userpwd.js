//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.post("/",(req,res)=>{
  var uid=req.session.uid;
  var upwd=req.body.upwd;
  var sql="UPDATE bm_user SET upwd=md5(?) WHERE uid=?";
  query(sql,[upwd,uid])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"修改成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"修改失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;