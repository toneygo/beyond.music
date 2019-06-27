<template>
    <div class="bk">
        <div class="top">
            <span @click="back" class="topf">
                <img src="img/xy.png" alt="">
            </span>
            <span >手机号登陆</span>
        </div>
        <p>未注册手机号登录后将自动创建账号</p>
        <div class="inp">
            +86<input class="inp1" type="text" v-model="inp" v-focus placeholder="输入手机号">
            <span @click="del" class="sc">
                <img v-show="sc" src="img/sc.png" alt="">
            </span>
        </div>
        <div class="inp2">
             <input v-model="upwd" type="password" placeholder="请输入密码">
        </div>
        <div @click="next" class="btn">
           <button :class="bt1" :disabled="ds"  class="bt">登录/注册</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sc:false,
            inp:"",
            bt1:{btn1:true},
            ds:true,
            upwd:""
        }
    },
    methods:{
        back(){
             this.$router.push("/login")
        },
        del(){
            this.inp="";
        },
        next(){
            var pho=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            if(pho.test(this.inp)){
                if(this.upwd!=""){
                    this.$router.push("/home")
                }else{
                        this.$toast({
                        message:"密码不能为空",
                        duration:1000,
                        // iconClass:"iconfont icon-cuowu"
                    })
                }
                
            }else{
                this.$toast({
                    message:"手机号格式错误",
                    duration:1000,
                    // iconClass:"iconfont icon-cuowu"
                })
            }
            
        }
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    },
    watch:{
        inp(){
            if(this.inp.length>0){
                this.sc=true;
                this.bt1.btn1=false;
                this.ds=false;
            }else{
                this.sc=false;
                this.bt1.btn1=true;
                this.ds=true;
            }
        }
    }
}
</script>
<style scoped>
      input{
        font-size:16px;
        border:0 !important;
        outline: 0;
        margin-bottom: 0!important;
        margin-left:8px; 
        padding-left:0!important;
    }
    .inp{    
        margin:0 10px 5px 10px; 
        border-bottom:1.5px solid #ddd; 
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        
    }
    .inp1{
        padding-left:5px;
       
    }
    .inp2{
        padding:0px 30px;
        margin:0px 10px 5px 10px;
        border-bottom: 2px solid #ddd!important;
    }
    .btn1{
        opacity: 0.5;
    }
    .btn{
        display: flex;
        justify-content: center;
        margin-top:30px; 

    }
    .bt{
        width:85%;
        padding: 6px;
        border:0;
        border-radius: 50px;
        outline: 0;
        background-image: linear-gradient(to right,#f13e3e,#c20c0c);
        color:#fff;
    }
    .sc img{
        width: 16px;
    }
    .sc{
        position: absolute;
        top:7px;
        right:5px;

    }
     input::input-placeholder{
         color:#9c9494;
          font-size:15px;
     }
    input::-webkit-input-placeholder{
          color:#aaa;
          font-size:15px;
     }
     input:-moz-placeholder{
         color:#9c9494;
          font-size:15px;
     }
    .topf img{
        width: 24px;
    }
    .topf{
        position: absolute;
        top:16px;
        left:6px;        
    }
    .top span{
        font-size:16px;
    }
    .top{
        display: flex;
        justify-content: center;
        padding-top:20px; 
    }
   .bk{

        height: 667px;
    }
    p{
        color:#9c9494;
        font-size:10px;
        margin: 40px 5px 30px 10px;
    }
  
</style>
