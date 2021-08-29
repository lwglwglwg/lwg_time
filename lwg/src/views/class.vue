<template>
    <div class="box">
      <!-- lsit3 -->
            <div class="list3">
                 <!-- 名师 -->

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
import {appIndex} from "@/http/api"
    export default {
        data(){
            return{
                 appIndex_list3:[],
            }
        },
        async created(){
          let res = await appIndex()
          this.appIndex_list3=res.data.data[2].list
        }
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    padding-bottom: 50px;
     .list3{ //名师
      width: 100%;
      background: #f0f0f0;
     
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
}
</style>