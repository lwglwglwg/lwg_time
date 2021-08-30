<template>
    <div class="index">
        <!-- 导航组件 -->
         <Navbar></Navbar>
         <!-- 轮播图 -->
         <bar></bar>
           <div class="d">
               <div class="dd">
                    <div class="ddd">
                        <van-icon name="orders-o"></van-icon>
                         <span class="s">大威天龙</span>
                    </div>
               </div>
            </div>
            <!-- lsit -->
            <div class="list">
                 <!-- 资深讲师 -->
             <van-cell-group class="z" @click="$router.push('/class')">
              <van-cell title="资深讲师"  is-link  value="更多">
                  <template #icon>
                       <span class="ss"></span>
                  </template>
              </van-cell>
            </van-cell-group>
               <van-card
               v-for="item in appIndex_list"
               :key="item.teacher_id"
               @click="$router.push('/detail?teacher_id='+item.teacher_id)"
              >
              <template #thumb> 
                  <img :src="item.teacher_avatar" style="width:50px;height:50px;border-radius:50%;">
              </template>
              <template #desc> 
                 <b style="display:block;" class="bb">{{item.teacher_name}}</b>
                 <span>{{item.introduction}}</span>
              </template>
              </van-card>
            </div>
           
            <!-- lsit2 -->
            <div class="list2">
                 <!-- 推荐课程 -->
             <van-cell-group class="z" @click="$router.push('/class')">
              <van-cell title="课程推荐"  is-link  value="更多" >
                  <template #icon>
                       <span class="ss"></span>
                  </template>
              </van-cell>
            </van-cell-group>
               <van-card
               v-for="item in appIndex_list2"
               :key="item.teacher_id"
               @click="$router.push('/index/tearchlist?id='+item.teacher_id)"
              >
              <template #thumb> 
                  <img :src="item.cover_img" style="width:100%;height:100%;border-radius:50%;">
              </template>
              <template #desc> 
                 <b style="display:block;" class="bb">{{item.title}}</b>
                 <span >{{item.sales_num}}人已报名</span>
              </template>
               <template #num> 
                   <!-- price==underlined_price -->
                   <p v-if="item.price==item.underlined_price"><span  style="color:green;">免费</span></p>
                   <p v-else>
                       <s>{{item.underlined_price}}</s>
                       <b  style="color:red;" >{{item.price}}</b>
                  </p>
              </template>
              </van-card>
            </div>

             <!-- lsit3 -->
            <div class="list3">
                 <!-- 名师 -->
             <van-cell-group class="z" @click="$router.push('/class')">
              <van-cell title="名师"  is-link  value="更多">
                  <template #icon>
                       <span class="ss"></span>
                  </template>
              </van-cell>
            </van-cell-group>
               <van-card
               v-for="item in appIndex_list3"
               :key="item.teacher_id"
               @click="$router.push('/index/tearchlist?id='+item.teacher_id)"
              >
              <template #thumb> 
                  <img :src="item.teacher_avatar" style="width:50px;height:50px;border-radius:50%;">
              </template>
              <template #desc> 
                 <b style="display:block;" class="bb">{{item.teacher_name}}</b>
                 <span>{{item.introduction}}</span>
              </template>
              </van-card>
            </div>
    </div>
</template>

<script>
// 组件
import Navbar from "@/components/nav_bar"
import bar from "@/components/bar"
// 方法
import {banner,appIndex} from "@/http/api.js"
    export default {
        components:{Navbar,bar},
        data(){
            return{
                appIndex_list:[],
                appIndex_list2:[],
                appIndex_list3:[],
            }
        },
    //    async created(){
    //        let res =await banner() //bar 没有数据
    //        console.log(res)
    //     }
      async created(){
         let res = await appIndex()
         console.log(res.data.data)
         console.log(res.data.data[0].list)
         this.appIndex_list=res.data.data[0].list
         this.appIndex_list2=res.data.data[1].list
         this.appIndex_list3=res.data.data[2].list


       }
        
    }
</script>

<style lang="scss" scoped>
.d{
      width: 100%;
      height: 60px;
      background: white;
    
      padding-bottom: 50px;
      .dd{
          width: 100%; 
         .ddd{
            margin-left: 10px;
              .van-icon{
            font-size: 30px;   
            margin-top: 10px;  
          }
         .s{
             display: block;
          }
         }
      }
  }
  .ss{
      width: 5px;
      height: 20px;
      background: red;
      margin-left: 15px;
      display: inline-block;
  }
  .list{ //资深推荐
      width: 100%;
      background: #f0f0f0;
      .van-card{
          width: 90%;
          height: 80px;
          margin:10px auto ;
          .bb{
              display:block;
              font-size: 15px;
              height: 30px;
          }
      }
      .van-cell-group{
            width: 100%;
            background: #f0f0f0;
            margin:auto;
            height: 30px;
            box-sizing: border-box;
        .van-cell{
            background: #f0f0f0;
           
        }    
     }
 
}
.list2{//课程推荐
      width: 100%;
      background: #f0f0f0;
      margin-top: -10px;
      .van-card{
          width: 90%;
          height: 100px;
          margin:10px auto ;
          .bb{
              display:block;
              font-size: 15px;
              height: 30px;
          }
      }
      .van-cell-group{
            width: 100%;
            background: #f0f0f0;
            margin:auto;
            height: 30px;
            box-sizing: border-box;
        .van-cell{
            background: #f0f0f0;
           
        }    
      }
}
 .list3{ //名师
      width: 100%;
      background: #f0f0f0;
      padding-bottom: 50px;
      .van-card{
          width: 90%;
          height: 80px;
          margin:10px auto ;
          .bb{
              display:block;
              font-size: 15px;
              height: 30px;
          }
      }
      .van-cell-group{
            width: 100%;
            background: #f0f0f0;
            margin:auto;
            height: 30px;
            box-sizing: border-box;
        .van-cell{
            background: #f0f0f0;
           
        }    
     }
 
}
     
</style>