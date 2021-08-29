<template>
    <div class="box">
      <div class="centent">
        <!-- <input type="text" placeholder="请设置登录密码">
        <input type="text" placeholder="请再次输入密码"> -->
         <van-cell-group @click="$router.push('/login')">
      <van-cell title="设置密码"  icon="lock" is-link />
      <van-cell title="注销账号"  icon="close" is-link />
    </van-cell-group>
        <van-button type="danger" @click="tui" block >退出登录</van-button>
      </div>
     <button @click="$router.push('/mys/mys')" class="btn">跳过</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        methods:{
            tui(){
                this.$store.state.token=''//清除token
                this.$router.push('/my')
            }
        }
    }
</script>

<style lang="scss" scoped>
.box{
    position: relative;
      .btn{
        position: fixed;
        right: 0px;
        bottom: 0;
        padding: 10px 20px;
        background: white;
        margin: 5%;
        border: 2px solid #f0f0f0;
    }
.top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
   
    span{
        display: block;
        font-size: 20px;
    }
  
}
input{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
}
input:hover{
    margin: 10px auto;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid red;
}
.van-button{
    width: 90%;
    margin: 10px auto;
}
}

</style>