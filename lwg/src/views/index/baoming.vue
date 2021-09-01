<template>
    <div class="baomimg">
    
<!-- 报名 -->
        <div class="box1">
             <div class="card">
                <p> <img src="@/assets/img/address.png" style="width:40px;height:40px;"></p>
                 <p><van-tag type="warning">+请添加收货地址</van-tag></p>
             </div>
        </div>
        <!-- 2 -->
         <div class="box2">
             <div class="card2">
                 <van-tag type="warning">面授课</van-tag>
                 少林功夫
             </div>
        </div>
        <!-- 底 -->
        <van-submit-bar :price="3050" button-text="提交订单" @submit="add_address" />
    </div>
</template>

<script>
import {baoming} from "@/http/api"
    export default {
        data(){
            return{}
        },
        mounted(){
           this.getbaoming()
        },
        methods:{
          async getbaoming(){
              let res = await baoming({shop_id: "284", type: "3", product_number: 1, spell_id: "", group_id: 0})
                                       
                             console.log(res);
                                       
          },
          add_address(){

          }
        }
    }
</script>

<style lang="scss" scoped>

.baomimg{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    
    .box1{
        width: 100%;
        height: 80px;
       
          
          .card{
                background: white;
                margin: 10px auto;
              width: 90%;
              height: 80px;
               display: flex;
               img {
                   margin: 30%;
               }
               .van-tag{
                   width: 100%;
                   margin: 30%;
               }
          }
    }
    .box2{
         width: 90%;
         height: 100px;
         background: white;
         margin: 10px auto;
         .card2{
             width: 100%;
             
         }
    }
}
</style>