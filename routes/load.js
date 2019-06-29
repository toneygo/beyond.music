//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var mid=req.query.mid;
  var sql="UPDATE bm_user_self SET loaddown=1 WHERE mid=? AND uid=?";
  query(sql,[mid,uid])
  .then(result=>{
    if(result.affectedRows>0){
      var sql="SELECT loadcount FROM bm_music WHERE mid=?";
      return query(sql,[mid])
    }else {
      res.send(JSON.stringify({code:-1,msg:"下载失败"}))
    }
  })
  .then(result=>{
    var loadcount=result[0].loadcount;
      loadcount++;
    var sql=`UPDATE bm_music SET loadcount=${loadcount} WHERE mid=?`;
    return query(sql,[mid])
  })
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"下载成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"下载加数失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;