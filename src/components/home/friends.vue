<template>
    <div class="friends-box">
        <div class="friend-item" v-for="n of 4" :key="n">
            <div class="item-title">
                <div class="f1">
                <div class="touxiang">
                    <img src="@/assets/find/li1.jpg" alt="">
                </div>
                <div class="item-messgae">
                    <p><span>新新人类</span> 发布视频</p>
                    <p>5181粉丝</p>
                </div>
                </div>
                <span class="focus">+ 关 注</span>
            </div>
            <div class="item-body">
                <p>你是房中客</p>
                <p class="focus-num">#最新热歌</p>
                <img src="@/assets/find/l1.jpg" alt="">
            </div>
            <div><span class="iconfont">&#xe68f;</span>  6</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped>
.friend-box{
    width: 100%;
   
}
.friend-item{
    position: relative;
    padding:1.5rem;
    border-bottom:1px solid #ddd;
    box-shadow:0 0 1px black;
}
.item-title{
    position: relative;
    display: flex;
    justify-content: space-between;
}
.f1{
    display: flex;
}
.touxiang{
    border-radius: 100%;
    overflow: hidden;
    width:4rem;
}
.item-messgae>p{
    color:black;

}
.item-messgae span{
    color:red;
    font-size: 1.25rem;
}
.touxiang>img{
    width:100%;
}
.focus{
    display: block;
    background: red;
    height:2rem;
    color:white;
    font-weight: bold;
    line-height: 2rem;
    padding:0 0.5rem;
    border-radius: 20px;
}
.focus-num{
    color:blue;
}
.item-body{
    width:100%;
}
.item-body>img{
    width:100%;
}
</style>
