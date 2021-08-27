<template>
    <div class="box">
        <div class="bar">
            <div class="t">
              <!-- 阿里图 -->
              <p> <i class="iconfont icon-user user" ></i></p>
               <p class="de"> <b @click="login()">登录/ </b> <b>注册</b></p>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    login() {
        this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height:100%;
  .bar{
    width: 100%;
   height: 300px;
    background-image: url('../assets/img/我的/bar.png');//背景图
    background-size: 100%;
    background-repeat: no-repeat;
    .t{
      width: 100%;
      height: 200px;
      line-height: 200px;
      text-align: center;
      .user{
         padding: 30px;
         background: white;
         border-radius: 50%;
         border: 1px solid blue;
         box-shadow: 0 0 10px;
         font-size: 30px;
         box-sizing: border-box;
      }
      .de{
        margin-top: -130px;
        b{
          font-size: 16px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }

}
</style>