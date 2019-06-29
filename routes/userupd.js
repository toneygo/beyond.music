//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.post("/",(req,res)=>{
  var uid=req.session.uid;
  var phone=req.body.phone;
  if(!phone){res.send(JSON.stringify({code:-1,msg:"phone required"}));return};
  var obj=req.body;
  var sql="UPDATE bm_user SET uname=?,email=?,phone=?,gender=?,birthday=?,post=?,user_name=?  WHERE uid=?";
  query(sql,[obj.uname,obj.email,obj.phone,obj.gender,obj.birthday,obj.post,obj.user_name,uid])
  .then(result=>{
    if(result.affectedRows>0){
      res.send(JSON.stringify({code:1,msg:"修改成功"}));
    }else{
      res.send(JSON.stringify({code:-1,msg:"修改失败"}));
    }
  })
  .catch(error=>console.log(error))
});

module.exports=router;