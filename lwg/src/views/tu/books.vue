<template>
    <div class="box">
        <div class="box1">
            <van-tabs v-model="active1">
              <van-tab :title="item.name" v-for="item in book_list" :key="item.id">                                
              </van-tab>
            </van-tabs>
            <!-- tab2 -->
          
             <div class="box2">
                 <!-- 按时间 -->
                  <ul>
                      <li v-for="(item,index) in arr" :key="index"
                      >
                       <span  :class="{tspan:tspan==index,act:act==index}" @click="hong(index)">{{item}}</span>
                      </li>
                  </ul>
               
             </div>
            
             
        </div>
    
    </div>
</template>

<script>
import {tu,tuAll} from '@/http/api'
    export default {
        data(){
            return{
                active1:0,
                book_list:[],
                arr:['按时间','按热度','按价格'],
                act:0,
                tspan:0,
                // books:{
                //     page: 1,
                //     limit: 10,
                //     order:id
                // },

                // card_list:[]
            }
        },
        mounted(){
          this.gettu()
          this.gettuAll()
        },
        methods:{
          async gettu(){
              let res = await tu()
              console.log(res);
              this.book_list=res.data.data
           },
           hong(index){
             this.active=index
             this.tspan=index
           },
            // async  gettuAll(){
            //     let res =await tuAll(this.books)
            //     console.log(res);
            //      this.card_list=res.data.data.list
            //   },
          
        },

    }
</script>

<style lang="scss" scoped>

.box{
    width: 100%;
    height: 100%;
   
.box2{
    width: 100%;
    height: 40px;
    ul{
        width: 60%;
        line-height: 40px;
        display: flex;
        justify-content: space-around;
        .tspan{
          width: 5%;
          margin-bottom: 3px;
          border-bottom: 2px solid red;
        }
        .act{
            color: red;
        }
    }

}
}
</style>