//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.post("/",(req,res)=>{
  var uid=req.session.uid;
  var vip=req.body.vip;
  var sql="UPDATE bm_user SET vip=? WHERE uid=?";
  query(sql,[vip,uid])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;