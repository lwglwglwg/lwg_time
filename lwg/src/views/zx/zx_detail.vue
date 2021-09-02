<template>
    <div class="box">
        <div class="box1">
            <img :src="goodXq.thumb_img" alt="">
        </div>
        <div class="box2">
            <div class="bb"><b>{{goodXq.title}}</b></div>
            <div class="f">
                <p>{{goodXq.click_rate}}次预览</p>
                <p>{{goodXq.created_at | fomartTime('MM-dd')}}</p>
            </div>
            <div class="cc">
                <b>{{goodXq.description}}</b>
            </div>
            <div class="d">
                <h3 v-html="goodXq.content"></h3>
            </div>
        </div>
    </div>
</template>

<script>
// information_id
import {zx_detail} from '@/http/api'
    export default {
        data(){
            return{
                information_id:this.$route.query.information_id, //information_id
                  goodXq:[],
            }
        },
        mounted(){
          this.getzx_detail()
           console.log(this.information_id);
        },
        methods:{
         async  getzx_detail(){
             let res =await zx_detail({information_id:this.information_id})
             console.log(res)
             this.goodXq=res.data.data
           }
        },

    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    .box1{
        width: 100%;
        height: 300px;
        background: white;
        img{
            width: 100%;
            height: 100%;
            // background-size: 100% ,100%;
            // box-shadow: 0 0 10px white;
        }
    }
    .box2{
        width: 100%;
        height: 340px;
        margin: 10px auto;
        background: white;
        .bb{
            font-size: 20px;
            font-weight: bold;
            margin: 5%;
        }
      .f{
          width: 90%;
            display: flex;
        justify-content: space-between;
         margin-left: 10px;
      }
      .cc{
          width: 100%;
          height: 50px;
         
          b{
              width: 60%;
              font-size: 16px;
              text-align: center;
            line-height: 50px;
            display: block;
            margin:10px auto;
             border-bottom: 2px solid gray;
          }
      }
      .d{
          margin: 10%;

      }
    }
}
</style>