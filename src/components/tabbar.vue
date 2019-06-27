<template>
    <!-- 底端导航栏 focused是true显示被选中图片 -->
    <div>
        <img :src="focused?selectedImage:normalImage" alt="" class="myImge">
    </div>
</template>

<script>
export default {
   props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
   }
};
</script>
<style scoped>
    .myImge{
        width:22px;
        height: 22px;
        z-index: 1001!important;
    }
</style>
