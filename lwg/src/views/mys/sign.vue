<template>
  <div class="box">
    <div class="bar">
      <div class="t">
        <!-- 头 -->
        <div class="top">
          <div class="top2">
            <van-icon name="manager" class="user"/>&emsp;
            <span class="tt">{{$store.state.token.nickname}}</span>
            <span class="j">积分:28</span>
          </div>
          <p>
            <span class="s" @click="qd">签到规则</span>
          </p>
          
        </div>
        <!-- 日期 -->
        <div class="rq">
          <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" /> -->
          <van-calendar
            row-height="30"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '300px' }"
          />
        </div>
      </div>
    </div>

    <!-- 渲染type1 -->
    <div class="down" >
      <van-cell  is-link arrow-direction="down" value="更多" 
       @click="$router.push('/mys/htj')"
       >
         <template #title>
           <span class="custom-title2">|</span>&nbsp;
          <span class="custom-title">好课推荐</span>
          
        </template>
      </van-cell>
      
      <van-card
      :desc="jf_list.course_name"
        :thumb="jf_list.cover_img"
          @click="$router.push('/mys/jfxq?type=1')"
      >
        <template #footer>
          <van-button size="mini" type="round">去兑换</van-button>
        </template>
        <template #price>
          <b style="color:red;">{{jf_list.course_status +'积分'}}</b>
        </template>
      </van-card>
      <!-- 2 -->
       <van-cell  is-link arrow-direction="down" value="更多" @click="$router.push('/mys/htj')">
         <template #title>
           <span class="custom-title2">|</span>&nbsp;
          <span class="custom-title">热门图书</span>
          
        </template>
      </van-cell>
      <van-card
        :price="jf_list2.course_status"
        :title="jf_list2.book_name"
        :desc="jf_list2.author"
        :thumb="jf_list2.cover_img"
      >
        <template #footer>
          <van-button size="mini" type="round">去兑换</van-button>
        </template>
        <template #price>
          <b style="color:red;">{{jf_list.course_status +'积分'}}</b>
        </template>
      </van-card>
    </div>
   <!--  -->
   
  </div>
</template>

<script>
import { jf } from "@/http/api";
export default {
  data() {
    return {
     
      show: true,
      minDate: new Date(2010, 0, 1),
      jf_list:[],
      jf_list2:[],//type2
    };
  },
  mounted() {
    this.getjf();
    this.getjf2()
  },
  methods: {
    formatDate(date) {
      //日期
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    qd(){//签到
        this.$dialog.alert({
          title: '签到规则',
          message: '1.每日签到可获得日签奖励，在单个周期内连续签到可获得连签奖励，同1个周期内最多可领取一次；</span></p><p><span style="font-size: 14px;">2.每日最多可签到1次，断签则会重新计算连签天数；</span></p><p><span style="font-size: 14px;">3.活动以及奖励最终解释归机构所有；</span></p><p><br/></p>"',
        }).then(() => {
          // on close
        });

    },
    async getjf() {//积分g
      let res = await jf({ type: 1 });
      console.log(res,11111111111);
      this.jf_list=res.data.data.list[0]
    },
     async getjf2() {//积分g
      let res = await jf({ type: 2 });
      console.log(res);
      this.jf_list2=res.data.data.list[0]
    }
  }
};
</script>

<style lang="scss" scoped>
.s {
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  border: 1px solid white;
 
}
.box {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  position: relative;
  .down {
    position: absolute;
    top: 460px;
    left: 0px;
    width: 100%;
    height: 400px;
    .custom-title2{
      color: red;
      font-size: 20px;
      font-weight: bold;
      box-sizing: border-box;

    }
  }
  .rq {
    width: 90%;
    height: 100px;
    margin: auto;
    position: relative;
    .van-calendar {
      width: 90%;
      height: 100px;
      margin: auto;
      border-radius: 20px;
      box-shadow: 0 0 10px white;
    }
  }
  .bar {
    width: 100%;
    height: 280px;
    background: red;
    background-size: 100%;
    background-repeat: no-repeat;
    .t {
      width: 100%;
      height: 10px;
      line-height: 200px;
      position: relative;
      .top {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        position: relative;
        .j{
          position: absolute;
          left: 100px;
          top: -50px;
          color: cornsilk;
        }
        .tt {
          color: white;
          position: absolute;
          top: -70px;
          left: 100px;
          font-size: 20px;
        }
        .tag {
          .van-tag {
            width: 10%;
            position: absolute;
            right: 0;
            top: 86px;
            padding-left: 27px;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
          }
        }
      }
      .van-grid {
        width: 100%;
        position: absolute;
        top: 230px;
      }
      .user {
        padding: 10px;
        background: white;
        border-radius: 50%;
        color: white;
        background: blue;
        box-shadow: 0 0 10px;
        font-size: 30px;
        margin-left: -40px;
        box-sizing: border-box;
      }
      .de {
        margin-top: -130px;
        b {
          font-size: 16px;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .list {
    background: #f0f0f0;
    margin: 40px 0;
  }
}
</style>