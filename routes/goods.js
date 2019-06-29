//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  if(req.session.uid!==undefined){
    var sql="select goods from bm_user_uploading where lid=?";
    query(sql,[lid])
    .then(result=>{
      var goods=result[0].goods;
      goods++;
      var sql=`update bm_user_uploading set goods=${goods} where lid=?`;
      return query(sql,[lid])
    })
    .then(result=>{
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"点赞成功"}))
      }else{
        res.send(JSON.stringify({code:-1,msg:"点赞失败"}))
      }
    })
    .catch(error=>console.log(error))
  }else{
    res.send(JSON.stringify({code:-1,msg:"点赞需登录"}))
  }
});

module.exports=router;