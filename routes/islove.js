//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var mid=req.query.mid;
  var islove=req.query.islove;
  var sql="UPDATE bm_user_self SET  islove=? WHERE mid=? AND uid=? ";
  query(sql,[islove,mid,uid])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"收藏成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"收藏失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;


