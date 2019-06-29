//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var sql="SELECT uname,email,phone,avatar,gender,birthday,post,fans,vip FROM bm_user WHERE uid=?";
  query(sql,[uid])
  .then(result=>{
    if(result.length>0){
      res.send(JSON.stringify({code:1,msg:"查询成功",data:result}));
    }else{
      res.send(JSON.stringify({code:-1,msg:"请注册"}));
    }
  })
  .catch(error=>console.log(error))
});
module.exports=router;
