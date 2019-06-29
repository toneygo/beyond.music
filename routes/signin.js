//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.post("/",(req,res)=>{
  var phone=req.body.phone;
  var upwd=req.body.upwd;
  if(!phone){
    res.send(JSON.stringify({code:-1,msg:"phone required"}));
    return;
  };
  if(!upwd){
    res.send(JSON.stringify({code:-1,msg:"upwd required"}));
    return;
  };
  var sql="SELECT uid FROM bm_user WHERE phone=? AND upwd=md5(?)";
  query(sql,[phone,upwd])
  .then(result=>{
    if(result.length>0){
      req.session.uid=result[0].uid;
      // console.log(result);
      res.send(JSON.stringify({code:1,msg:"登陆成功",data:{uid:result[0].uid}}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"登录失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;
