//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  if(req.session.uid!==undefined){
    var uid=req.session.uid;
    var fuid=req.query.fuid;
  var sql="insert into  bm_user_party(uid,fuid) values (?,?) ";
  query(sql,[uid,fuid])
  .then(result=>{
    if(result.affectedRows>0){
      var sql="select fans from bm_user where uid=?";
      return query(sql,[fuid])
    }else{
      res.send(JSON.stringify({code:-1,msg:"添加好友失败"}));
      return;
    }
  })
  .then(result=>{
    var fans=result[0].fans;
    fans++;
    var sql=`update bm_user set fans=${fans} where uid=?`;
    return query(sql,[fuid])
  })
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"添加成功"}))
    }else{
      res.send(JSON.stringify({code:1,msg:"加分失败"}))
    }
  })
  .catch(error=>console.log(error))
  }else{
    res.send(JSON.stringify({code:-1,msg:"添加需登录"}))
  }
});

module.exports=router;