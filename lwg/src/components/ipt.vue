<template>
    <div>
<!-- 搜索组件 -->
<van-search
  v-model="value"
  show-action
  placeholder="请输入内容"
  @search="onSearch"
  shape="round"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
    </div>
</template>

<script>
   export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
};
</script>

<style lang="scss" scoped>

 .van-search__content--round{
  background: rgb(228, 231, 237);
}
</style>