<template>
    <div class="box">
   <!-- 搜索 -->
      <div class="box1">
          <input type="text" placeholder="🔍搜索课程" @click="$router.push('/searchlist')">
      </div>
      <!--筛选  -->
      <div class="box2">
           <van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="item">
    <van-cell center title="包邮">
      <template #right-icon>
        <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
      </template>
    </van-cell>
    <van-cell center title="团购">
      <template #right-icon>
        <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
      </template>
    </van-cell>
    <div style="padding: 5px 16px;">
      <van-button type="danger" block round @click="onConfirm">
        确认
      </van-button>
    </div>
  </van-dropdown-item>
</van-dropdown-menu> 
      </div>
    </div>
</template>

<script>

    export default {
        data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '分类', value: 0 },
        { text: '', value: 1 },
        { text: '活动商品', value: 2 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    .box1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
       input{
           width: 90%;
           height: 40px;
           border-radius: 50px;
           text-align: center;
           font-size: 18px;
           box-sizing: border-box;
       }
    }
}
</style>