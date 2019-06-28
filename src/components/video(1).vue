<template>
    <div class="video-box" width="100%" >
        <img src="/static/img/videobox/6.jpg" class="bg-bulr">
        <div class="video-body">
           
            <!-- 背景 -->
            <div class="video-play">
                <div class="top-title">
                    <span class="iconfont" @click="to">&#xe61f;</span>
                    <span class="iconfont">&#xe656;</span>
                </div>
                <img src="/static/img/videobox/2.jpg" class="top-img">
                <div class="play-conainer">
                    <div class="img-body">
                        <img src="/static/img/videobox/6.jpg" width="100%">
                    </div>
                    <div class="turn-play"></div>
                </div>
                <div>
                    <p>brave heart</p>
                    <p> 宮崎歩</p>
                </div>
                <div class="play-bar">
                    <span>{{audioCurrentTime}}</span>
                    <div class="play-line" style="width:70%">
                        <span class="play-posi" style="left:0%"></span>
                    </div>
                    <span>{{audioAllTime}}</span>
                </div>
                <div class="contr-bar">
                    <audio ref="audio" :src='srcloc+musicsrc[index]'></audio> 
                    <span class="iconfont">&#xe68f;</span>
                    <span class="iconfont">&#xe603;</span>
                    <span class="iconfont" @click="playkey" ref="playpause">&#xe6a5;</span>
                    <span class="iconfont">&#xe602;</span>
                    <span class="iconfont" data-icon="&#xe747;">&#xe605;</span>
                <hr>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { clearInterval } from 'timers';


export default {
    data() {
        return {
            srcloc:"http://127.0.0.1:3000/",
            musicsrc:[],
            audioTime:0,//音频进度百分比"/static/audio/djx.mp3"
            audioCurrentTime:'00:00',//音频当前播放时间
            audioAllTime:'00:00',//音频总播放时间
            audioAllDuration:0,//音频总播放秒数
            isPlay:false,//是否正在播放
            multipleArray:[0.75,1,1.5,2],
            multipleIndex:1,
            isPlayIcon:`&#xe6a5;`,
            index:0
        };
    },
    watch: {
    },
    methods: {
     playkey(e){
         var ky=e.target.getAttribute("data-icon");
        if(this.$refs.audio.paused){
            this.$refs.audio.play();
        }else{
            this.$refs.audio.pause();
        }
     },
     setmusictest(){
       
     },
      //  获取播放时间
    getaudiotime(){
        // 获取总时长
        var audio=this.$refs.audio;
        var alltime=parseInt(audio.duration);
        var sec;
        alltime=Math.floor(parseInt(audio.duration)/60);
        sec=Math.floor(parseInt(audio.duration)%60);
        if(sec<10){
            sec=`0${sec}`;
        }
        this.audioAllTime=`0${alltime}:${sec}`;
        // 获取当前时间
        var ctime=Math.floor(parseInt(audio.currentTime)/60);
        var csec;
        csec=Math.floor(parseInt(audio.currentTime)%60);
        if(csec<10){
            csec=`0${csec}`;
        }
        if(ctime<10){
            ctime=`0${ctime}`;
        }
        this.audioCurrentTime=`${ctime}:${csec}`;
        // 进度条
        var dian=document.getElementsByClassName("play-posi")[0];
        var po=parseInt(audio.currentTime)/alltime;
        dian.style.left=`${po}%`;
        this.$refs.playpause.innerHTML=(audio.paused)?`&#xe6a4;`:`&#xe6a5;`;
    },
    
    
    //  跳转
      to(){
          this.$router.push("/PlayList");
      }
    },
    components: {

    },
    created(){
        //获取音乐路径集合 和要加载歌的序号
        this.index=this.$route.params.index;
        console.log(this.$route.params);
        this.musicsrc=this.$route.params.musicsrc;
        console.log(this.musicsrc);
        let audio = new Audio();
        
      audio.src =this.srcloc+this.musicsrc[this.index]; //audio链接
     var timer=audio.addEventListener('loadedmetadata', () =>{
         var  check=setInterval(()=>{
            this.getaudiotime();
        },200);
      });
      
      // 进度条的拖拽
      audio.addEventListener('touchstart',function(ev){
                        clearInterval(timer)
                        var oDiv1W = document.getElementsByClassName("play-posi")[0].offsetWidth;
                        var oldX = ev.targetTouches[0].clientX - oDiv3.offsetLeft;

                        document.addEventListener('touchmove',fnMove,false)
                        document.addEventListener('touchend',fnEnd,false)
                        function fnMove(ev){
                            
                            var x = ev.targetTouches[0].clientX - oldX;
                            if(x>=oDiv1W){
                                x=oDiv1W;
                            }else if(x<=0){
                                x=0;
                            }
                            oDiv3.style.left=x+'px';
                            oDiv2.style.width=x+'px';

                        }
                        function fnEnd(ev){
                            document.removeEventListener('touchend',fnEnd,false)
                            document.removeEventListener('touchmove',fnMove,false)
                            var newX = ev.changedTouches[0].clientX;
                            var oDiv2W = oDiv2.offsetWidth;
                            var oDuration = oDiv2W/oDiv1W;
                            clearInterval(timer)
        
                            Audio.currentTime=oDuration*oAudio.duration;
                            timer=setInterval(function(){
                                playAudio(oAudio.currentTime/oAudio.duration)
                                vm.voteTime = oAudio.duration-oAudio.currentTime;
                            }, 100)
                            if(oAudio.paused){
                                vm.voteTime = oAudio.duration-oAudio.currentTime;
                                clearInterval(timer)
                            }
                        }
                    },false);
    },
    mounted(){
          
    },
    destroyed(){
       
    }
};
</script>

<style scoped>
.video-body{
    display: flex;
    justify-content: center;
    min-height: 105%;
    background: rgba(0,0,0,0.6);
    z-index: 3;
    
}
 video{
    display: none;
}
img.bg-bulr{
    position: absolute;
    width:100vw; height:100vh;
    z-index: -1;
    filter:blur(15px);
}
.top-title{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding:5px 3px;
    color:antiquewhite;
    position: absolute;
    margin:0 auto;
}
.top-title>span{
    font-size: 26px;
}
.video-play{
    width:100%;
    text-align: center;
    min-height: 100%;
    min-height:664px;
}
.top-img{
    width:30%;
    margin:0 atuo;
    position: relative;
    z-index: 3;
}
.turn-play{
    background:transparent url(/static/img/videobox/1.jpg) no-repeat top;
    background-size: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    content: "";
    top:0;
}
.img-body{
    overflow: hidden;
    background-size: contain;
    position: relative;
    border-radius: 50%;
    width:80%;
    margin:0 auto;
    padding:14%;
}
.turn-play>img{
    position:relative;
}
.play-conainer{
    position:relative;
    top:-14%;
}
.play-bar{
    position: relative;
    width:100%;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    justify-content:space-between;
    padding:0 1rem;
    z-index: 10;
    bottom:0;
} 
.play-line{
    
    height:4px;
    background: black;
    border-radius: 3px;
    margin:0;
    margin-top:2%;
}
.play-posi{
    display: block;
    width:10px;height:10px;
    border-radius: 50%;
    background: black;
    position: relative;
    top:-3px;
}
.contr-bar>span{
    font-size:2rem;
} 
</style>
