//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var mid=req.query.mid;
  var sql="SELECT * FROM bm_music where mid=?"
  query(sql,[mid])
  .then(result=>{
    res.send(JSON.stringify(result));
  })
  .catch(error=>console.log(error))
});

module.exports=router;