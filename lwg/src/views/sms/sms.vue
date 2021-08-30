<template>
    <div class="box">
        
        <!-- 图片 -->
       <div class="box1">
           <span class="s">密码登录</span>
          <img src="@/assets/img/登/bar.png" alt="">
       </div>
       <!-- 验证 -->
       <div class="box2">
         <div class="from">
              <p class="p1" > <input type="text" placeholder="请输入手机号" v-model="from.mobile"></p>
              <p class="p2"><input type="text" placeholder="请输入密码" v-model="from.password"></p>
              <p class="p3"><span @click="$router.push('/sms/find_sms')">找回密码</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;<b @click="$router.push('/login')">注册/验证码登录</b></p>
              <van-button block type="danger" @click="deng"> 登录</van-button>
         </div>
       </div>
        <div class="bottom">
             <p><van-checkbox v-model="checked"></van-checkbox></p>
            <p><span>我同意</span><span style="color:red;">用户注册协议</span>和<span style="color:red;">隐私保护协议</span></p>
         </div> 
    </div>
</template>

<script>

import {login} from "@/http/api.js"
export default {
   data(){
       return{
           act:0,
           from:{
               mobile:'',
                password:'',//验证码
             
           },
           checked:false,//登录
          
       }
   },
   created(){
    
   },
   methods:{
      async  deng(){
            if (this.checked==false) {
               this.$toast.fail('请先勾选协议，再登录')
               return false
           }
          let res = await login({mobile:this.from.mobile,password:this.from.password,type:1,client:'1'})//type：1账号密码
              if (res.data.code==200) {
                  this.$store.commit("dotoken",res.data.data)
                  this.$toast.success("登录成功")
                    this.$router.push("/mys/mys")
              } else {
                  this.$toast.fail("密码或手机号错误")
              }
          
        }
    // async yz(){
    //       var reg = /^1[3-9]\d{9}$/
    //        if (!reg.test(this.from.mobile)) {//正则
    //            this.$toast.fail("手机格式不对")
    //            return false
    //        }
          
    //    let res = await request.post('/smsCode',{  mobile:this.from.mobile,  sms_type:'login' }) //第一次封装
        // let res =await smsCode({ mobile:this.from.mobile,sms_type:'login' })    //第2次封装
             
    //    },
    
   
    //   login(){
    //        this.axios.post('/login',{
    //            mobile:this.from.mobile,
    //            sms_code:this.from.sms_code,
    //            type:2,
    //            client:"1"
    //        }).then(res=>{
    //            console.log(res)
    //            if (res.code==200) {//成功
    //                localStorage.setItem("token",JSON.stringify(res.data))
    //                this.$router.push("/setting")
    //            }
               
    //        })
    //    }
   }
};
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    position: relative;
    .box1{
        width: 100%;
        height: 350px;
        position: relative;
        .s{
            position: absolute;
            top: 20px;
            left: 20px;
            color: red;
            font-size: 20px;
            box-sizing: border-box;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .box2{
        width: 100%;
         margin: auto;
        height: 370px;
        background: white;
        margin-top: 15px;
        .from{
            width: 100%;
            height: 300px;
          .p1{
              width: 90%;
               font-size: 18px;
               margin-left: 20px;
               input{
               padding: 10px;
               border: 0;
               width: 60%;
              }
              .sp{
                  color: red;
                  font-size: 16px;
                  font-family: bode;
              }
          }
          .p1:hover{
              border-bottom: 1px solid red;
          }
           .p2{
              width: 90%;
               margin-left: 20px;
             
               input{
                   width: 60%;
                    border: 0;
               box-sizing: border-box;
                  padding: 10px;
                  font-size: 18px;
              }
          }
          .p2:hover{
              border-bottom: 1px solid red;
          }
          .p3{
              width: 90%;
              margin: auto;
              text-align: center;
          }
         .van-button{
             width: 90%;
             margin:30px auto;
         }
        }
    }
      .bottom{
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 80px;
        left: 0;
        justify-content: center;
    }
}

</style>