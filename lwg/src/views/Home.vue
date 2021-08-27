<template>
    <div>
<router-view />
<van-tabbar route>
  <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/class" icon="search">课程</van-tabbar-item>
  <van-tabbar-item replace to="/zx" icon="home-o">资讯</van-tabbar-item>
  <van-tabbar-item replace to="/books" icon="search">图书</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="home-o">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>