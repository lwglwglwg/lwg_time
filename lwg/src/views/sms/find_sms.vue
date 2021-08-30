<template>
    <div class="box">
        <div class="top">
            <span>密码</span>
        </div>
      <div class="centent">
           <input type="text" placeholder="请输入手机号" v-model="from.mobile">
           <span style="color:red;" class="span" @click="yz" >{{txt}}</span>
        <input type="text" placeholder="请输入验证码" v-model="from.sms_code">
        <input type="text" placeholder="请输入密码" v-model="from.password">
        <van-button type="danger" block @click="deng">确定</van-button>
      </div>
    
    </div>
</template>

<script>
import {smsCode,password} from '@/http/api.js'//密码
    export default {
        data(){
            return{
                txt:'获取验证码',
             from:{
               mobile:'',
               password:'',//密码
                sms_code:'',//短信
              },
            }
        },
        methods:{
          async  yz(){
                var time =3
                var timer =setInterval(() => {
                    this.txt=`还有${time}后解锁`
                     if (time<=0) {
                         clearInterval(timer)
                         this.txt=`获取验证码`

                     }
                     time--
                }, 1000);
                console.log(this.from);
                
             let res = await smsCode({mobile:this.from.mobile,sms_type:'login'})//1 验证码接口

             console.log(res)     
            },
           async  deng(){
             let res =await password(this.from)
             console.log(res)
            //  if (res.data.code==200) {
                 
            //  }
            //   this.$router.push("/mys/mys")
            //   this.$toast.success("登录成功")

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
    width: 90%;
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
.centent{
    position: relative;
    .span{
        position: absolute;
        top: 10px;
        right: 10px;

    }
}

</style>