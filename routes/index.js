//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  //创建要返回的对象
  var output={
    carousel:[],
    hot:[],
    rec:[]
  };
  var sql="SELECT * FROM bm_index_carousel";
  query(sql)
  .then(result=>{
    output.carousel=result;
    var sql="SELECT * FROM bm_index_hot";
    return query(sql);
  })
  .then(result=>{
    output.hot=result;
    var sql="SELECT * FROM bm_index_rec";
    return query(sql);
  })
  .then(result=>{
    output.rec=result;
    res.send(JSON.stringify(output));
  })
  .catch(error=>console.log(error))
});
module.exports=router;
