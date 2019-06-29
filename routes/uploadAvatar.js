//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
var multiparty=require("connect-multiparty")
var multipartyMiddleware=multiparty();
router.post("/", multipartyMiddleware,(req,res)=>{
//  分别返回body,文件属性,以及文件存放地址
    // console.log(req.body);
    // console.log(req.files);
    // console.log(req.files.file.path);
    var avatar=req.files.file.path;
    var nav=avatar.slice(7).split('\\')
    var n=nav.join("/")
    res.send(n);
    var uid=req.session.uid;
    var sql="UPDATE bm_user SET avatar=? WHERE uid=?";
    query(sql,[n,uid])
    
})
module.exports=router;
