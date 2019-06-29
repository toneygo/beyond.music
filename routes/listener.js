//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var mid=req.query.mid;
  var sql="SELECT listener FROM bm_music WHERE mid=?";
  query(sql,[mid])
  .then(result=>{
    var listener=result[0].listener;
    listener++;
    var sql=`UPDATE bm_music SET listener=${listener} WHERE mid=?`;
    return query(sql,[mid])
  })
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"倾听成功"}))
    }else{
      res.send(JSON.stringify({code:-1,msg:"倾听失败"}))
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;