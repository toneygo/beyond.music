<template>
    <div class="bk">
        <div class="anma">
            <div class="imgs">
                <img src="img/1.jpg" alt="">
            </div>
            <div class="anm"></div>
            <div class="anm sce"></div>
        </div>
        <div class="bt">
            <button class="bt1" @click="login">手机号登录</button>
            <button class="bt2" @click="taste">立即体验</button>
        </div>
        <div class="ims">
            <div>
                <img src="img/wx.png" alt="">
            </div>
            <div>
                 <img class="img1" src="img/qq.png" alt="">
            </div>
            <div>
                 <img src="img/xl.png" alt="">
            </div>
            <div>
                 <img  class="img2" src="img/wy.png" alt="">
            </div>
        </div>
       <div class="inpt" @click="chek">
            <span id="inp"></span>
            <span v-show="mh" class="sel">
                <img src="img/dh.png" alt="">
            </span>
            <span class="fot font">同意</span>
            <span class="font">《服务条款》和《隐私政策》</span>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           mh:true
        }
    },
    methods:{
        taste(){
             if(!this.mh){
                this.$toast({
                    message:"请先勾选《服务条款》和《隐私政策》",
                    duration:1000,
                    // iconClass:"iconfont icon-cuowu"
                })
            }else{
                this.$router.push("/home")
            }
        },
        login(){
            if(!this.mh){
                this.$toast({
                    message:"请先勾选《服务条款》和《隐私政策》",
                    duration:1000,
                    // iconClass:"iconfont icon-cuowu",
                    // className:"ic"
                })
            }else{
                this.$router.push("/jump")
            }
        },
        chek(){
            this.mh=!this.mh;    
        }
     
    }
}
</script>
<style scoped>
    .ic{
        font-size:20px!important;
    }
    .sel img{
        position:absolute;
        width: 10px;
        top:3px;
        left: -15px;
    }
    #inp{
        width: 10px;
        height: 10px;
        border:1px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        display: inline-block;
        margin: 0px 5px 2px 0;
    }
    .fot{
        color:rgba(255, 255, 255, 0.5)!important;
    }
    .font{
        color:#fff;
        font-size:10px;
        vertical-align: top;
    }
    .inpt{
        position: absolute;
        text-align: center;
        margin-left:-3px ;
        width:64%;
        top:90%;
        left:18%;
    }
    .ims div{
        border:1px solid rgba(255, 255, 255, 0.2);
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        
    }
    .ims img{
        width: 20px;
    }
    .img1{width: 18px!important;}
    .img2{width: 30px!important;}
    .ims{
        position: absolute;
        left: 15%;
        top:78%;
        width: 70%;
        display: flex;
        justify-content: space-around;
    }
    .sel{
        position: relative;
    }
    @keyframes change{
        0%{ 
            opacity: 0.5;z-index: 1;
        }
        100%{
            width:300px;height: 300px;
            top:calc(0% - 150px);left:calc(50% - 150px);opacity: 0;
        }
    }
    .anma{
        position: absolute;
        top: 30%;
        left:  calc(50% - 40px);
        height: 80px;
        width: 80px;
        z-index: 0;
    }
    .anm{
        position: absolute;
        border:1px solid #fff;
        top:calc(0% - 39px);
        left: calc(50% - 39px);
        width:78px;height: 78px;
        border-radius: 50%;
        background-color:#c20c0c;
        animation: change 5s linear infinite; 
        /* z-index: -1;  */
    }
    .sce{
        animation-delay: 1.5s;
    }
    .imgs{
        position: absolute;
        width:80px;height:80px;
        left: calc(50% - 40px);
        overflow: hidden;
        border-radius: 50%;
        top:-51%;
        z-index: 10;
    }
    .imgs img{
        position: absolute;
        width: 200px;
        top:-42px;
        left: -62px;
        z-index: 100;
    }
    .bk{
        background-color:#c20c0c;
        height: 100%;
        position: absolute;
        width: 100%                                             
    }
    .bt{
        /* position: relative; */
        display: flex;
        flex-direction: column;
        top:50%;
        left:50%;
    }
    .bt1{
        outline: 0;
        font-weight: 600;
    }
    .bt1,.bt2{ 
        border:1px solid #fff;    
        width: 60%;
        position: absolute;
        top:60%;
        left: 20%;
        border-radius:50px!important; 
        font-size: 14px!important;
        height: 35px!important;
        color:#c20c0c!important;    
    }
    .bt2{
        top:68%;
        background-color: #c20c0c!important;
        color:#fff!important;
    }
</style>
