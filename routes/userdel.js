//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.delete("/",(req,res)=>{
  var uid=req.session.uid;
  var sql="DELETE FROM bm_user WHERE uid=?";
  query(sql,[uid])
  .then(result=>{
    if(result.affectedRows>0){
      delete req.session.uid;
      res.send(JSON.stringify({code:1,msg:"销户成功"})); 
    }else{
      res.send(JSON.stringify({code:-1,msg:"销户失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;
