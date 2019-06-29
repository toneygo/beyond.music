//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var output={};
  if(req.query.uid!==undefined){
    var uid=req.query.uid;
    var sql="select * from bm_user_party where uid=?";
    query(sql,[uid])
    .then(result=>{
      output.friend=result;
      var uid=[];
      for (var item of result ){
        uid.push(item.fuid);
      };
      uid=uid.toString();
      var sql=`SELECT * FROM bm_user_uploading WHERE uid in (${uid})`;
      return query(sql)
    })
    .then(result=>{
      output.friendup=result;
      var uid=[];
      for (var item of output.friend ){
        uid.push(item.fuid);
      };
      uid=uid.toString();
      var sql=`SELECT uid,fans FROM bm_user WHERE uid in (${uid})`;
      return query(sql)
    })
    .then(result=>{
        output.friendfans=result;
        var pno=1;
        var ps=4;
        var offset = (pno-1)*ps;
        ps = parseInt(ps);
      var sql="SELECT * FROM bm_user_uploading ORDER BY showtime DESC LIMIT ?,? ";
      return query(sql,[offset,ps])
    })
    .then(result=>{
      output.gol=result;
      var uid=[];
      for (var item of result ){
        uid.push(item.uid);
      };
      uid=uid.toString();
      var sql=`SELECT uid,fans FROM bm_user WHERE uid in (${uid})`;
      return query(sql)
    })
    .then(result=>{
      output.golfans=result;
      res.send(JSON.stringify({code:1,msg:"查询成功",data:output}))
    })
    .catch(error=>console.log(error))

  }else{
    var pno=1;
    var ps=4;
    var offset = (pno-1)*ps;
      ps = parseInt(ps);
    var sql="SELECT * FROM bm_user_uploading ORDER BY showtime DESC LIMIT ?,? ";
    query(sql,[offset,ps])
    .then(result=>{
      output.gol=result;
      //console.log(result);
      var uid=[];
      for (var item of result ){
        uid.push(item.uid);
      };
      uid=uid.toString();
      var sql=`SELECT uid,fans FROM bm_user WHERE uid in (${uid})`;
      return query(sql)
    })
    .then(result=>{
      output.golfans=result;
      res.send(JSON.stringify({code:1,msg:"success",data:output}))
    })
    .catch(error=>console.log(error))
  }
});

module.exports=router;