<template>
  <div class="box">
    <!-- 头 -->
    <div class="box1" >
      
      <van-tabs v-model="active" @change="xiuId" >
        <!-- card -->
        <van-card 
          v-for="(item) in  zx_conentlist"
          :key="item.id"
          price="2.00"
          :desc="item.description"
          :title="item.title"
          :thumb="item.thumb_img"
          @click="$router.push('/zx_detail?information_id='+item.id)"
        >
          <template #price>
            <van-icon name="browsing-history-o" color="#1989fa"/>
            <span>{{item.click_rate}}</span>
          </template>
          <template #footer>
            <van-icon name="underway-o" color="#1989fa"/>
            <span>{{item.created_at | fomartTime('yyyy/MM/dd hh:mm')}}</span>
          </template>
        </van-card>
        <van-tab v-for="item in zx_toplist" :key="item.id" :title="item.name">{{item.name}}</van-tab>
            <!-- 没有 -->
        <div  v-show="zx_conentlist.length==0">
           <van-empty 
            class="custom-image"
            image="http://120.53.31.103:86/img/empty.0d284c2e.png"
            description="暂无评论"
            />
        </div>
        </van-tabs>
        
     </div>
       
  </div>
</template>

<script>
import { zx_top, zx_conent } from "@/http/api";
export default {
  data() {
    return {
      active: 0,
      zx_toplist: [],
      zx_conentlist: [],

      cid: 0, //
      from: {
        limit: 10,
        page: 1,
        classify_id: 0
      }
    };
  },
  mounted() {
    this.getzx_top();
    this.getzx_conent();
  },
  methods: {
    async getzx_top() {
      let res = await zx_top(); //方法
      console.log(res);
      this.zx_toplist = res.data.data;

      this.zx_toplist.unshift({//向前添加一个
           id: 0,
          name: "全部",
          parent_id: 0
      })
    },  
    async getzx_conent() {
      //内容
      let res = await zx_conent(this.from);
      console.log(res, 2222);
      this.zx_conentlist = res.data.data.list;
    },
  
    xiuId(index){
       this.cid=index//获取当前下标
       this.from.classify_id=this.zx_toplist[index].id // classify_id接口id = 上面id
       this.getzx_conent()//调用
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  .box1 {
    width: 100%;

    padding-bottom: 50px;
    .van-card {
      width: 90%;
      height: 120px;
      margin: 10px auto;
      /deep/.van-icon {
        color: red;
      }
    }
  }
}
</style>