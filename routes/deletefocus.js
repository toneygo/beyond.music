//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  if(req.query.lid!==undefined){
    var lid=req.query.lid;
    var sql="delete from bm_user_uploading where lid=? and uid=?";
    query(sql,[lid,uid])
    .then(result=>{
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"朋友圈删除成功"}))
      }else{
        res.send(JSON.stringify({code:11,msg:"朋友圈删除失败"}))
      }
    })
    .catch(error=>console.log(error))
  }else if(req.query.mid!==undefined){
    var mid=req.query.mid;
    var sql="delete from bm_user_self where mid=? and uid=?";
    query(sql,[mid,uid])
    .then(result=>{
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"音乐移除成功"}))
      }else{
        res.send(JSON.stringify({code:11,msg:"音乐移除失败"}))
      }
    })
    .catch(error=>console.log(error))
  }else if(req.query.fuid!==undefined){
    var fuid=req.query.fuid;
    var sql="delete from bm_user_party where fuid=? and uid=?";
    query(sql,[fuid,uid])
    .then(result=>{
      if(result.affectedRows>0){
        var sql="select fans from bm_user where uid=?";
        return query(sql,[fuid])
      }else{
        res.send(JSON.stringify({code:-1,msg:"朋友移除失败"}))
        return;
      }
    })
    .then(result=>{
      //console.log(result);
      var fans=result[0].fans;
      fans--;
      var sql=`update bm_user set fans=${fans} where uid=?`;
      return query(sql,[fuid])
    })
    .then(result=>{
      if(result.affectedRows>0){
        res.send(JSON.stringify({code:1,msg:"朋友移除成功"}))
      }else{
        res.send(JSON.stringify({code:-1,msg:"朋友降分失败"}))
      }
    })
    .catch(error=>console.log(error))
  }
});

module.exports=router;
