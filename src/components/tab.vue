<template>
<div style="height:100% position:relative">
    <div class="page-head">
            <span class="iconfont" @click="user">&#xe79c;</span>
            <span class="iconfont">&#xe607;不一样的音乐</span>
            <span class="iconfont">&#xe611;</span>
    </div>
</div>
    
</template>
<script>
import set from './UserSet'
export default {
    data() {
        return {
            index:0
        };
    },
    watch: {

    },
    methods: {
        user:function(){
            var user=document.getElementsByClassName("user_bg")[0];
            var html=document.getElementsByTagName("html")[0];
            var fix=document.getElementsByClassName("foot_fixed")[0];
            user.style.width="100%";
            fix.style.width="80%";
            html.style.overflowY="hidden";
            user.onclick=(e)=>{ 
                this.index++;
                console.log(this.index);
                if(this.index>=2){
            var user=document.getElementsByClassName("user_bg")[0];
            var html=document.getElementsByTagName("html")[0];
            var fix=document.getElementsByClassName("foot_fixed")[0];
            user.style.width="0%";
            fix.style.width="0%";
            html.style.overflowY="auto"
            this.index=0;
            }
            };
            
        },
        
    },
   components: {
    
    },
};
</script>

<style scoped>
.page-head{
   display: flex;  /*弹性布局*/
   position: fixed; /*固定定位*/
   z-index: 999;
   width:100%;     /*宽度*/
   justify-content: space-between;
   align-items: center;/*垂直居中*/
   height:48px;
   padding-left:7px;
   padding-right: 7px;
   background-color: #e4393c;
   color:#fff;
   font-size:18px; 
   top:0;
 }
</style>
