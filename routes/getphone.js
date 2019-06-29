//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var phone=req.query.phone;
  var sql=`select uid from bm_user where phone=?`;
  query(sql,[phone])
  .then(result=>{
    if(result.length>0){
      res.send(JSON.stringify({code:1,msg:"该号码已注册"}))
    }else{
      res.send(JSON.stringify({code:0,msg:"该号码未注册"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;