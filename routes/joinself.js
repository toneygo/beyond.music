//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var mid=req.query.mid;
  var sql="INSERT INTO bm_user_self(mid,uid) VALUES (?,?)";
  query(sql,[mid,uid])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"加入成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"加入失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;