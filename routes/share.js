//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var mid=req.query.mid;
  var sql="UPDATE bm_user_self SET share=1 WHERE mid=? AND uid=?";
  query(sql,[mid,uid])
  .then(result=>{
    if(result.affectedRows>0){
      var sql="INSERT INTO bm_user_uploading(mid,uid) VALUES (?,?) ";
      return query(sql,[mid,uid])
    }else{
      res.send(JSON.stringify({code:-1,msg:"分享失败"}));
      return;
    }
  })
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"分享成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"未能分享到朋友圈"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;