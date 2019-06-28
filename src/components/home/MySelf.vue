<template>
  <div class="myself">
    <div class="myself_header_hot">
      <ul>
        <li>
          <span class="header_hot iconfont">&#xe652;</span>
          <div class="name">私人FM</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe61c;</span>
          <div class="name">最新电台</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe62a;</span>
          <div class="name">私人空间</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe67b;</span>
          <div class="name">私藏推荐</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe637;</span>
          <div class="name">亲子音乐</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe62e;</span>
          <div class="name">古典专区</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe61d;</span>
          <div class="name">悦跑在线</div>
        </li>
        <li>
          <span class="header_hot iconfont">&#xe630;</span>
          <div class="name">驾驶模式</div>
        </li>
      </ul>
    </div>
    <div class="myself_body_music">
      <ul>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe697;</span>
            <div class="body_name" @click="tolocal('音乐列表')">音乐列表( <span>{{musics.length}}</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe66c;</span>
            <div class="body_name" @click="tolocal('最近播放')">最近播放( <span>{{musics.length}}</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe7ef;</span>
            <div class="body_name" @click="tolocal('下载管理')">下载管理( <span>{{lnum}}</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe609;</span>
            <div class="body_name" @click="tolocal('我的分享')">我的分享( <span>{{snum}}</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe66e;</span>
            <div class="body_name" @click="tolocal('经典私藏')">经典私藏<span>({{inum}})</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="myself_create_music">
      <h4>创建的歌单 <span>(0)</span> </h4>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      musics:[],
      snum:0,
      lnum:0,
      inum:0
    }
  },
  created(){
    this.loaddata()
  },
  watch:{
    
  },
  methods:{
    tolocal(str){
      var uid=sessionStorage.getItem("uid");
      //console.log(uid);
      if(uid!==null){
         this.$router.push("/PlayList");
         sessionStorage.removeItem("liststr");
         sessionStorage.setItem("liststr",str);
      }else{
        this.$messagebox({
          title:"请登录",
          message:"确定到登录页面吗?",
          showConfirmButton:true,
          showCancelButton:true,
        })
        .then(result=>{
          if(result=='confirm'){
            this.$router.push("/jump")
          }else{
            return;
          }
        })
      }
    },
    loaddata(){
      //加载音乐列表数据
        var url="musicself";
        //var params={mid:1};           
        this.axios.get(url)
        .then(result=>{
          var data=result.data.data.selfmusic;
          this.musics=data;
          //console.log(data);
          var num1=0,num2=0,num3=0;
            for (var m of data){
              if(m.share==1){
                num1++;
              };
              if(m.loaddown==1){
                num2++;
              };
              if(m.islove==1){
                num3++;
              };
            };
           this.snum=num1;
           this.lnum=num2;
           this.inum=num3;  
        })
        .catch(err=>console.log(err))
    }
  },
  
}

</script>
<style scoped>
.myself{
  padding-top:50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.myself_header_hot{
  width: 100%;
  overflow-x: scroll;
}
.myself_header_hot::-webkit-scrollbar {
    display: none;
  }
.myself_header_hot ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:200%;
  height:60px;
  box-sizing: border-box;
}
.myself_header_hot ul li{
  padding:0 10px;
  width:85px;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
}
.myself_header_hot ul li:first-child{
  padding-left:0px;
}
.header_hot{
   font-size: 34px ;
   color:#cc3341;
}
.name{
  font-size: 12px;
}
.myself_body_music{
  padding-top:20px;
  box-sizing: border-box;
}
.myself_body_music ul li{
  width:100%;
  height:65px;
  padding-left: 25px;
  display: flex;
  justify-content: start;
  position: relative;
}
.myself_body_music ul li:first-child{
  border-top:1px solid #ddd;
}
.myself_body_music ul li+li .body_cell::before{
  content: "";
  width:80%;
  height:1px;
  background-color: #ddd;
  position: absolute;
  top:0;
  left:70px;
}
.myself_body_music ul li .body_cell{
  display: flex;
  justify-content: start;
  align-items: baseline;
  align-self: center;
}
.body_self{
  font-size: 30px ;
}
.body_name{
  font-size: 16px;
  padding-left: 25px;
}
.body_name span{
  font-size: 8px;
}
.myself_create_music{
  border-top:8px solid #eee;
}
.myself_create_music h4{
  padding-top:10px;
  padding-left:35px;
  box-sizing: border-box;
}
.myself_create_music h4 span{
  font-size: 14px;
  font-style: normal;
  font-weight: lighter;
}
</style>
