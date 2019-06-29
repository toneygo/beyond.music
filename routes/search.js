//引进模块 创建路由 
const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var kw=req.query.kw;
  var output={
    family:[],
    music:[],
    author:[],
    lan:[],
    style:[],
    mise:[],
    feel:[],
    theme:[]	
  };
  var kws=kw.split(" ");
 kws.forEach((elem,i,arr)=>{
   arr[i]=`fname like '%${elem}%'`;
 });
 var where=kws.join(" and ");
 var sql=`SELECT * FROM bm_music_family WHERE ${where} `;
 query(sql)
 .then(result=>{
   output.family=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`mname like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.music=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`author like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.author=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`lan like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.lan=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`style like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.style=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`mise like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.mise=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`feel like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.feel=result;
   var kws=kw.split(" ");
   kws.forEach((elem,i,arr)=>{
    arr[i]=`theme like '%${elem}%'`;
    });
  var where=kws.join(" and ");
  var sql=`SELECT * FROM bm_music WHERE ${where} `;
  return query(sql)
 })
 .then(result=>{
   output.theme=result;
   res.send(JSON.stringify({code:1,msg:"查询成功",data:output}))
 })
 .catch(error=>console.log(error))
});

module.exports=router;
