//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.ps;
  if(!pno||pno<1){pno=1};
  if(!ps){ps=4};
  var sql="SELECT * FROM bm_music LIMIT ?,?";
  pno=parseInt(pno);
  var offset=(pno-1)*ps;
  ps=parseInt(ps);
  query(sql,[offset,ps])
  .then(result=>{
    res.send(JSON.stringify(result));
  })
  .catch(error=>console.log(error))
});

module.exports=router;
