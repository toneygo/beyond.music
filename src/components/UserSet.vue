<template>
  <div class="user_bg">
    <div class="user_main">
      <div class="main_header"> 
        <div class="avatar">
          <span>
            <img :src="'http://127.0.0.1:3000/'+avatarUrl" alt="">
          </span>
          <div class="setting_right" @click.stop="uploadavatar">
                <div class="caption">更改头像</div>
            </div>
          <input type="file" name="avatar" ref="fileInput" accept="image/*" @change="uploadFile" class="hiddenInput"/>
        </div>
        <div class="name_vip">
          <span class="use_name">{{msg.uname}} hello!</span>
          <span class="vip" v-if="showVip">vip</span>
          <span class="novip" v-else-if="showVip==false">vip</span>
        </div>
      </div>
      <div class="main_body">
        <div class="nav">
          <ul>
            <li>
              <span class="header_hot iconfont">&#xe70f;</span>
              <div class="name">我的信息</div>
            </li>
            <li>
              <span class="header_hot iconfont">&#xe783;</span>
              <div class="name">我的好友</div>
            </li>
            <li>
              <span class="header_hot iconfont">&#xe623;</span>
              <div class="name">个性皮肤</div>
            </li>
            <li>
              <span class="header_hot iconfont">&#xe674;</span>
              <div class="name">听歌识曲</div>
            </li>
          </ul>
        </div>
        <div class="shop">
          <ul>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe620;</span>
                <div class="body_name">演出</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe78e;</span>
                <div class="body_name">商城</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe603;</span>
                <div class="body_name">附近</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe629;</span>
                <div class="body_name">铃声</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="set">
          <ul>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe645;</span>
                <div class="body_name">定时停止播放</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe60a;</span>
                <div class="body_name">扫一扫</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe6f2;</span>
                <div class="body_name">音乐闹钟</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe636;</span>
                <div class="body_name">音乐网盘</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe622;</span>
                <div class="body_name">在线听歌免流量</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe60b;</span>
                <div class="body_name">游戏推荐</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe61a;</span>
                <div class="body_name">优惠券</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe609;</span>
                <div class="body_name">音乐人</div>
              </div>
            </li>
            <li>
              <div class="body_cell"> 
                <span class="body_self iconfont">&#xe6c2;</span>
                <div class="body_name">直播</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="foot_fixed">
      <ul>
        <li>
          <span class="foot_hot iconfont">&#xe63e;</span>
          <div class="foot_name">夜间</div>
        </li>
        <li>
          <span class="foot_hot iconfont">&#xe654;</span>
          <div class="foot_name">设置</div>
        </li>
        <li>
          <span class="foot_hot iconfont">&#xe64f;</span>
          <div class="foot_name" @click="turn">退出</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:{},
      showVip:false,
      avatarUrl:"img/avatar/2.png"
    }
  },
  created(){
    this.getMsg()
  },
  methods:{
    // 更改头像 
     uploadavatar: function () {
        this.$el.querySelector('.hiddenInput').click()
           },
        uploadFile: function (event) {
        var formData=new FormData()
        formData.append('file',event.target.files[0])
        // console.log(event.target.files[0]);
        // var params={imgData:formData}
        if (event.target.files[0]!==undefined){
            this.axios.post('uploadAvatar',formData,{headers:{'Content-Type':'multipart/form-data'}}).then(res=>{
                this.avatarUrl=res.data+`?t=${Math.random()}`
                // console.log(res)
                this.avatarUrl=res.data;
            })
         }
        // this.getMsg();
        },
    //获取用户信息
    getMsg(){
      var uid=sessionStorage.getItem("uid");
      if(uid!==null){
        var url="usermsg";
        this.axios.get(url).then(result=>{
          var data=result.data.data[0]
          this.msg=data;
          this.avatarUrl=data.avatar;
          // console.log(data);
          if(this.msg.vip==1){
            this.showVip=true;
          }else{
            this.showVip=false;
          }
        })
      }
    },
    turn(){
      //判断是否登录
      var uid=sessionStorage.getItem("uid");
      if(uid!==null){
       this.$messagebox({
          title:"退出",
          message:"确定到退出登录吗?",
          showConfirmButton:true,
          showCancelButton:true,
        })
        .then(result=>{
          if(result=='confirm'){
            var url="signout";
            this.axios.get(url)
            .then(result=>{
              //console.log(result);
              sessionStorage.removeItem("uid");
              this.$router.push('/');
            })        
          }else{
            return;
          }
        })
      }else{
        var url="signout";
        this.axios.get(url)
          .then(result=>{
            sessionStorage.removeItem("uid");
            this.$router.push('/');
        })    
      }
    }
  }
}
</script>
<style scoped>
.caption{
  color:#666;
  font-size:14px;
  margin:5px 0 0 14px;
}
.hiddenInput{
  display: none;
}
.user_bg{
  width:0%;
  height:100%;
  background-color:rgba(0,0,0,0.3);
  position: fixed;
  overflow: scroll;
  transition: all .3s linear;

}
.user_main{
  width:80%;
  height:100%;
  background-color: #f5f5f5;
  position: relative;
  z-index: 2;
  padding-bottom: 50px;
}
.main_header{
  width:100%;
  height: 200px;
  background-color: #efefef;
}
.avatar{
  padding:30px 20px 10px 30px;
  box-sizing: border-box;
}
.avatar span{
  display: block;
  width: 80px;
  height:80px;
  border-radius: 50%;
  /* border:1px solid transparent; */
  background:url("/img/avatar/1.png") no-repeat center center;
  background-size:contain; 
  text-align: center;
  line-height: 120px;
  color:#fff;
  font-size: 12px;
  overflow: hidden;
}
.avatar span img{
  width:100%;
}
.name_vip{
  padding:10px 30px 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.use_name{
  font-size: 20px;
  font-weight: 600;
}
.vip{
  display: block;
  width:50px;
  height: 30px;
  border-radius: 30px;
  border:1px solid #cc3341;
  background-color:#cc3341;
  color:#fff;
  text-align: center;
  line-height: 30px;
  font-style:italic;
}
.novip{
  display: block;
  width:50px;
  height: 30px;
  border-radius: 30px;
  border:1px solid #666;
  background-color:#666;
  color:#333;
  text-align: center;
  line-height: 30px;
  font-style:italic;
}
.main_body{
  width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color:#999;
}
.header_hot{
   font-size: 30px ;
   color:#cc3341;
}
.name{
  font-size: 12px;
}
.nav{
  padding-top:50px;
  box-sizing: border-box;
}
.nav ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav ul li{
  width:70px;
  height: 55px;
  padding:0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
}
.shop,.set{
  width:100%;
  padding-top:20px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.shop ul li,.set ul li{
  width:100%;
  height:50px;
  padding-left: 20px;
  display: flex;
  justify-content: start;
}
.shop ul li:first-child,.set ul li:first-child{
  border-top:1px solid #ddd;
}
.body_cell{
  display: flex;
  justify-content: start;
  align-items: center;
  align-self: center;
}



.body_self{
  font-size: 30px ;
}
.body_name{
  font-size: 16px;
  padding-left: 25px;
}


.foot_fixed{
  position: fixed;
  left:0;
  bottom: 0;
  z-index: 999;
  width:0;
  overflow: hidden;
  height:50px;
  border-top:1px solid #ddd;
  box-sizing: border-box;
  background-color:rgba(255,255,255,1);
  transition: all .3s linear;
  margin-bottom: 48px;
}
.foot_fixed ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.foot_fixed ul li{
  height:100%;
  display: flex;
  justify-content: center;
  align-items:center;
  align-self: bottom;
}
.foot_hot{
   font-size: 24px ;
}
.foot_name{
  padding-left:10px;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
