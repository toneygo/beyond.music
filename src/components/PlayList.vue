<template>
    <div class="playlist">
      <div class="header_nav">
        <header class="header">
            <div class="body_cell"> 
                <span class="body_self iconfont" @click="goback">&#xe79b;</span>
                <div class="body_name">{{str}}</div>
            </div>
        </header>
        <nav class="nav">
            <ul @click="activedli">
                <li class="active">单曲</li>
                <li>歌手</li>
                <li>专辑</li>
                <li>文件夹</li>
            </ul>
        </nav>
      </div>
     
      <div class="list_main">
          <div class="playkey">
           <div class="goall" @click="playall()">
            <span class="play iconfont">&#xe6f6;</span>
            <div class="all" >播放全部 <span>({{selfmusic.length}})</span> </div>
           </div>
          </div>
          <ul>              
              <li v-for=" (item,i) of musics" :key="i">
                <div class="left">
                    <span class="mname">{{item.mname}}</span>
                    <span class="aut">{{item.author}}</span>
                </div>
                <div class="right" @click="playone(i)">
                    <span class="play iconfont">&#xe6f6;</span>
                </div>
              </li>
          </ul>
      </div>
    </div>
</template>

<script>

export default {
    name:"Playlist",
    data() {
        return {
            str:"",
            musics:{},
            selfmusic:{},
            musicsrc:[]
        };
    },
    watch: {

    },
    created(){
        this.str=sessionStorage.getItem("liststr");
        //console.log(this.$route);
        this.musicself()
    },
    methods: {
        goback(){
            this.$router.push("/my")
        },
        activedli(e){
            var lis=document.querySelectorAll('nav.nav ul li');         
            //console.log(lis);
            //console.log(e.target);
            for(var li of lis){                              
                if(e.target==li){
                    for(var l of lis){ l.className=" ";}                  
                    li.className="active";
                }
            }
        },
        musicself(){
            //加载音乐列表数据
            var url="musicself";
            //var params={mid:1};           
            this.axios.get(url)
            .then(result=>{
                var {musics,selfmusic}=result.data.data;
                this.musics=musics;
                this.selfmusic=selfmusic;
                console.log(this.musics);
                for (var item of musics){
                    this.musicsrc.push(item.src)
                }
            })
            .catch(err=>console.log(err))
        },
        playall(){
            this.$router.push({name:"video",params:{musicsrc:this.musicsrc,index:0}})
        },
        playone(i){
            //console.log(i)
             this.$router.push({name:"video",params:{musicsrc:this.musicsrc,index:i}})
        }
    },
    components: {

    },
};
</script>

<style scoped>
.playlist{
    width:100%;
    height:auto;
    position: relative;
}
.header_nav{
    width:100%;
    height:auto;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(255,255,255,1);
}
.header_nav::after{
    content: "";
    display: block;
    clear: both;
}
.header{
    width:100%;
    height:auto;
    padding:30px 20px;
    padding-top:50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.body_cell{
    display: flex;
    justify-items: flex-start;
    align-items: stretch;
}
.body_self{
    font-size: 38px
}
.body_name{
  font-size: 20px;
  padding-left: 12px;
}
.nav{
    width:100%;
    height:auto;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.nav ul{
    width:100%;
    height:auto;
    padding:0 25px;
    /* padding-bottom: 10px; */
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    list-style: none;
}
.nav ul li{
    color:#000;
    padding-bottom: 10px;
}
.nav ul li.active{
    color:#cc3341;
    border-bottom: 2px solid #cc3341;
}
.list_main{
    width:100%;
    height:auto;
    padding:0 15px;
    padding-top:150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.playkey{
    width:100%;
    height:auto;
    display: flex;
    justify-content: space-between;
}
.playkey .goall{
    width: 36%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.play{
    font-size: 26px;
}
.all{
    font-size: 16px;
    font-weight: lighter;
}
.all span{
    font-size: 10px;
    font-weight: lighter;
}
.list_main ul{
    width:100%;
    height:auto;
    padding-top:20px;
    box-sizing: border-box;
}
.list_main ul li{
    width:100%;
    height:auto;
    padding:10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    width:70%;
    height:auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.mname{
    font-size: 18px;
    font-weight: 500;
}
.aut{
    font-size: 12px;
    font-weight: lighter;
    text-indent: 10px;
}
</style>
