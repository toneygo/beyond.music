//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var uid=req.session.uid;
  var output={
    selfmusic:[],
    musics:[]
  };
  if(req.session.uid!==undefined){
  var sql="SELECT * FROM bm_user_self WHERE uid=?";
  query(sql,[uid])
  .then(result=>{
    output.selfmusic=result;
    var mid=[];
    for (var item of result ){
      mid.push(item.mid);
    };
    mid=mid.toString();
    var sql=`SELECT * FROM bm_music WHERE mid in (${mid})`;
    return query(sql)
  })
  .then(result=>{
    output.musics=result;
    res.send(JSON.stringify({code:1,msg:"查询成功",data:output}))
  })
  .catch(error=>console.log(error))
}else{
  res.send(JSON.stringify({code:1,msg:"请登录"}))
}
});

module.exports=router;