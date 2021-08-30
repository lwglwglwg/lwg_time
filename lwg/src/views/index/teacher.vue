<template>
  <div>
    <van-card :title="teacher_conent.real_name" :thumb="teacher_conent.avatar"/>
    <van-tabs v-model="active">
      <van-tab title="讲师介绍">
        <!--  -->
        <van-cell-group>
          <van-cell title="老师简介"/>
        </van-cell-group>
        <b class="bc">{{teacher_conent.introduction}}</b>
      </van-tab>
      <van-tab title="主讲课程">
            <!-- 推荐课程 -->
           <div class="list2">
               <van-card
               v-for="item in class_list"
               :key="item.id"
            
              >
              <template #thumb> 
                  <img :src="item.cover_img" style="width:100%;height:100%;border-radius:50%;">
              </template>
              <template #desc> 
                 <b style="display:block;" class="bb">{{item.title}}</b>
                 <span >{{item.sales_num}}人已报名</span>
              </template>
               <template #num> 
                 <s>{{item.underlined_price}}</s>
                 <b  style="color:red;">{{item.price}}</b>

              </template>
              </van-card>
            </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 方法
import { teacher,mainCourse } from "@/http/api.js";
export default {
  data() {
    return {
      teacher_id: this.$route.query.teacher_id, //id
      teacher_conent: [],
       class_list:[],//主讲课程
      active: 1 //tab
    };
  },
    mounted() {
     this.jsjs()
     this.zjkc()  
  },
  methods: {
       async jsjs(){//讲师介绍
            let res = await teacher(this.teacher_id);
              console.log(res.data.data.teacher);
           this.teacher_conent = res.data.data.teacher;
          },
       async zjkc(){//主讲课程
         let res =await mainCourse()
            console.log(res.data.data.list)
            this.class_list=res.data.data.list
       }
  }
};
</script>

<style lang="scss" scoped>
.bc{
  margin-left: 20px;
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.list2{//课程推荐
      width: 100%;
      // background: #f0f0f0;
      // margin-top: -10px;
      padding-bottom: 50px;
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
</style>