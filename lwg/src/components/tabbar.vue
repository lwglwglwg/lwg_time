<template>
    <div class="tabber">
        <router-link v-for="(item,index) in tabbar_list" 
             :key="index" :to="item.url" 
             
             class="link">
            <img :src="active==index? item.nav_img_checked :item.nav_img"  class="bimg"   @click="icon1(index)"/>
          <span :class="{tspan:true,active:active==index}">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
import {tabbar} from '@/http/api.js'

    export default {
        data(){
            return{
                tabbar_list:[],
                active:0,//高亮

            }
        },
       async created(){
            let {data:{data:{index}}}=await tabbar()
               
            let list = ['/index','/class','/zx','/books','/my']//映射
              index.forEach((item,key)=>{
                  item.url=list[key]
              })
            // console.log(index);
              this.tabbar_list=index//数据
        },
        methods:{
            icon1(index){
                this.active=index
            }
        }
   
    }
</script>

<style lang="scss" scoped>
.tabber{
     width: 100%;
     display: flex;
     height: 50px;
     text-align: center;
   position: fixed;
   bottom: 0;
   left: 0;
   background: white;
}
.tabber .link{
       flex: 1;
      
        .bimg{
           width: 70%;
           height: 70%;
       }
       .tspan{
           display:inline-block;
       }
       .acctive{
           color: red;
       }
   }
  
</style>