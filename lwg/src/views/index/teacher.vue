<template>
    <div>
        <van-card v-for="item in teacher_conent" :key="item.teacher_id">
            <template #thumb>
                <img :src="item.cover_img" style="width:50px;height:50px;border-radius:50%;">
            </template>
        </van-card>
        11
    </div>
</template>

<script>
// 方法
import {teacher} from "@/http/api"
export default {
  data() {
    return {
        teacher_conent:[],

    };
  },
  async  created(id) {
    // console.log(this.$route.query.id);
    this.id = this.$route.query.id
    let res = await teacher('?id='+id)
    console.log(res)
    this.teacher_conent=res.data.data[1].list
  },
  methods:{
    // login(){
    //   this.$axios.get("/teacher?id="+this.id)
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>