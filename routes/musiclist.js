//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var musiclist={
    family:[],
    music:[]
  };
  var fid=req.query.fid;
  var sql="SELECT * FROM bm_music_family WHERE fid=?";
  query(sql,[fid])
  .then(result=>{
    musiclist.family=result;
    var sql="SELECT * FROM bm_music WHERE fid=?";
    return query(sql,[fid]);
  })
  .then(result=>{
    musiclist.music=result;
    res.send(JSON.stringify(musiclist));
  })
  .catch(error=>console.log(error))
});
module.exports=router;
