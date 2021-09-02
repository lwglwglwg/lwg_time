<template>
    <div class="box">
        <!-- lsit3 -->
        <div class="list3">
            <!-- 名师 -->
            <!-- <van-card
                v-for="item in appIndex_list3"
                :key="item.teacher_id"
                @click="$router.push('/detail?teacher_id='+item.teacher_id)"
            >
                <template #thumb>
                    <img
                        :src="item.teacher_avatar"
                        style="width:50px;height:50px;border-radius:50%;"
                    >
                </template>
                <template #desc>
                    <b style="display:block;" class="bb">{{item.teacher_name}}</b>
                    <span>{{item.introduction}}</span>
                </template>
            </van-card> -->
        </div>
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in appIndex_list3" :key="item.teacher_id">
                      <van-card
                @click="$router.push('/detail?teacher_id='+item.teacher_id)"
            >
                <template #thumb>
                    <img
                        :src="item.teacher_avatar"
                        style="width:50px;height:50px;border-radius:50%;"
                    >
                </template>
                <template #desc>
                    <b style="display:block;" class="bb">{{item.teacher_name}}</b>
                    <span>{{item.introduction}}</span>
                </template>
            </van-card>
                </van-cell>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { appIndex } from "@/http/api";
export default {
  data() {
    return {
      appIndex_list3: [],

       list: [],
      loading: false,
      finished: false,
      refreshing: false,

  
      current_page:1,
      limit:3,
      count:0
    };
  },
  async created() {
    let res = await appIndex({current_page:this.current_page,limit:this.limit});
      this.appIndex_list3=[...this.appIndex_list3]
    this.appIndex_list3 = res.data.data[2].list;
    this.count=Math.ceil(res.data.data.total/this.current_page)
    console.log()
  },
    methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding-bottom: 50px;
  .list3 {
    //名师
    width: 100%;
    background: #f0f0f0;

    .van-card {
      width: 90%;
      height: 100px;
      margin: 10px auto;
      .bb {
        display: block;
        font-size: 15px;
        height: 30px;
      }
    }
    .van-cell-group {
      width: 100%;
      background: #f0f0f0;
      margin: auto;
      height: 30px;
      box-sizing: border-box;
      .van-cell {
        background: #f0f0f0;
      }
    }
  }
}
</style>