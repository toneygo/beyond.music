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
  var sql=`INSERT INTO bm_user(phone,upwd) values (?,md5(?)) `;
  query(sql,[phone,upwd])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"register suc"}));
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;
