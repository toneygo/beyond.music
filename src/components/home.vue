<template>
    <div class="home">
      <titlebar></titlebar>
      <setuser></setuser>
      <!-- <transition :name="transitionName">
      <router-view class="view app-view"></router-view>
      </transition> -->
      <!-- 切换面板 -->
      <mt-tab-container class="mytab" v-model="active">
        <mt-tab-container-item id="find">
          <find></find>
        </mt-tab-container-item>
        <mt-tab-container-item id="friends">
          <friends></friends>
        </mt-tab-container-item>
        <mt-tab-container-item id="myself">
          <my-self></my-self>
        </mt-tab-container-item>
      </mt-tab-container>
      
      <!-- tabbar列表 -->
      <mt-tabbar  class="tab" v-model="active" fixed>
        <mt-tab-item  id="find"  @click.native="changeState(0)">
          <tabb :normalImage="require('../assets/tabbar/fx1.png')" :selectedImage="require('../assets/tabbar/fx2.png')" :focused="currentIndex[0].isSelect"></tabb>
            发现
        </mt-tab-item>
        <mt-tab-item id="friends"  @click.native="changeState(1)">
          <tabb  :normalImage="require('../assets/tabbar/py1.png')" :selectedImage="require('../assets/tabbar/py2.png')" :focused="currentIndex[1].isSelect"></tabb>
          朋友
        </mt-tab-item>
        <mt-tab-item id="myself" @click.native="changeState(2)">
          <tabb  :normalImage="require('../assets/tabbar/wd1.png')" :selectedImage="require('../assets/tabbar/wd2.png')" :focused="currentIndex[2].isSelect"></tabb>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
import titlebar from './tab'
import setuser from './UserSet'
import find from './home/find'
import friends from './home/friends'
import mySelf from './home/MySelf'
import tabb from './tabbar'
export default {
  name:"home",
    data() {
        return {
            active:"find",
             currentIndex:[
              {isSelect:true},
              {isSelect:false},
              {isSelect:false} 
           ]
        };
    },
    watch: {
      
    }, 
    methods: {
     changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
         
    },
    components: {
      titlebar,
      setuser,
      find,
      friends,
      mySelf,
      tabb
    },
    mounted:function(){
        

    }
};
</script>

<style>
.mytab{
  margin-bottom:50px; 
}
div.mint-tab-item-label{
  color:#8a8a8a!important;
  font-size:10px!important;
}

.mint-tabbar > .mint-tab-item.is-selected{
  color:#e4393c!important;
  background-color:#eee!important; 
}
.tab{
  background-color:#eee!important;
  z-index: 1000!important;
}
html,body,.app{width:100%;overflow-x: hidden;}
*{
  box-sizing: border-box;
  margin:0;padding:0;
  
}
/* html{overflow-y:hidden;} */
.view{
  margin:48px 0;
  height:100%;
  overflow:hidden; 
}
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
    position: absolute !important;

  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
    position: absolute !important;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);

    }
     
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
    position: absolute !important;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
     animation-duration: .3s; 
    /* position: absolute !important; */
  }
  @keyframes fold-right-in{
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
     
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  
    100%  {
     
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);

    }
  }
  /* .bottom-bar{
      display: flex;
      justify-content: space-around;
      position: fixed;
      bottom:0;
      z-index: 999;
      background:#ddd;
      width:100%;
      border-top: 1px solid black;
  }
  .bottom-bar-item{
      width:50%;
      text-align: center;
      color:red;
      padding:0.5rem 0;
      border-right:1px solid black;
  } */
  .user_bg{
    z-index: 1000;
  }
  .home{
      height: 100%;
      overflow-y: scroll;
      margin-top:48px; 

  }
  </style>
