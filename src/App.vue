<template>
 
 <div class="app">
   <router-view></router-view>
 </div>

</template>
<script>
import titlebar from './components/tab'
import setuser from './components/UserSet'
export default {
  name:"App",
    data() {
       
    },
    watch: {
        
        
    },
    
    methods: {
         
    },
    components: {
      'titlebar':titlebar,
      'setuser':setuser
    },
    mounted:function(){
        

    }
};
</script>

<style>
html,body,.app{width:100%;overflow-x: hidden;}
*{
  box-sizing: border-box;
  margin:0;padding:0;
  
}
/* html{overflow-y:hidden;} */
.view{
  margin:48px 0;
  height:100%;
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
    99% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  
    99% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);

    }
     100% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
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
    position: absolute !important;
  }
  @keyframes fold-right-in{
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    99% {
     
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
     100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  
    99% {
     
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);

    }
    100% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  }
  .bottom-bar{
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
  }
  .user_bg{
    z-index: 1000;
  }
</style>
