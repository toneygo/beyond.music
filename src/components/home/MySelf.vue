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
            <div class="body_name">本地音乐( <span>52</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe66c;</span>
            <div class="body_name">最近播放( <span>62</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe7ef;</span>
            <div class="body_name">下载管理( <span>2</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe609;</span>
            <div class="body_name">我的分享( <span>6</span> )</div>
          </div>
        </li>
        <li>
          <div class="body_cell"> 
            <span class="body_self iconfont">&#xe66e;</span>
            <div class="body_name">经典私藏<span>(12)</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="myself_create_music">
      <h4>创建的歌单 <span>(2)</span> </h4>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.myself{
  padding:50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.myself_header_hot{
  width: 100%;
  overflow-x: scroll;
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
