<template>
    <div class="box">
          <!-- courseInfo 课程详情-->
        <div class="bar">
            <img :src="basis_Xq.cover_img" />
        </div>
        <!-- card -->
        <div class="box2">
            <div class="b2">
                <br>
                 <h2>{{basis_Xq.title}}</h2><br>
                  <p>共{{basis_Xq.is_free}}课时 | {{basis_Xq.sales_num}}人已经报名</p><br>
                  <p>开课时间:  {{basis_Xq.start_play_date | fomartTime('yyyy/MM/dd hh:mm')}} -
                      {{basis_Xq.end_play_date | fomartTime('yyyy/MM/dd hh:mm') }}</p>
                 <!--xding  -->
                 <div class="san" v-if="basis_Xq.price==basis_Xq.underlined_price"><br>
                       <b style="color:red;font-size:16px;">免费</b>
                 </div>
                 <div class="san" v-else>
                   <h2><s style="color:gray;">{{basis_Xq.price/100}}.00</s><span style="color:red;">{{basis_Xq.underlined_price/100}}.00</span></h2>
                 </div>
            </div>
        </div>
        <!-- 服务 -->
       <div class="fw">
             <van-cell  is-link value="详情" @click="ispop=true">
              <template #title>
                 <span class="custom-title"><span>服务 :</span><b>课程服务</b></span>
               </template>
             </van-cell>  
       </div>
       <!-- 教学团队 -->
       <div class="box3">
           <div class="tt"><span>教学团队</span></div>
           <div class="g">
              <van-grid :column-num="5" icon-size="50px">
               <van-grid-item  v-for="item in basis_tuandui" :key="item.teacher_id"
                 :text="item.teacher_name" 
                 @click="$router.push('/detail?teacher_id='+item.teacher_id)"
                >
                    <template #icon>
                        <img style="width:50px;height:50px;border-radius:50%" :src="item.teacher_avatar" alt="">
                    </template>
                </van-grid-item>
             </van-grid>
           </div>
       </div>
       <!-- 课程介绍 -->
       <div class="box4">
           <van-tabs  type="card">
          <van-tab title="课程介绍">
              <div class="jj">
                   <p>课程介绍</p>
                  <p>crazy english</p>
                    <p>so pretty</p>
              </div>
          </van-tab>
          <van-tab title="课程大纲">
               <div class="jj">
                   <p>课程介绍</p>
                  <p>crazy english</p>
                    <p>so pretty</p>
              </div>
          </van-tab>
          <van-tab title="课程评价">
               <div class="jj">
                   <p>课程介绍</p>
                  <p>crazy english</p>
                    <p>so pretty</p>
              </div>
          </van-tab>        
         </van-tabs>
       </div>
       <!-- 课程大纲 -->
       
       <div class="box5">
               <h3>课程大纲</h3>
            <!-- 控制面板 -->
           <van-collapse v-model="activeNames">
             <van-collapse-item  >
              <template #title>
                  <h4>1.{{basis_dgang.title}}</h4>
               </template>
                <div>
                    <p><van-tag type="warning">回放</van-tag> {{basis_dgang.child[0].periods_title}}</p>
                    <p>{{basis_dgang.child[0].teachers[0].teacher_name}} 
                        {{basis_dgang.child[0].start_play}}--{{basis_dgang.child[0].end_play}}</p>

                </div>
              </van-collapse-item>
             
           </van-collapse>
       </div>
       <div class="bg"></div>
       <!-- 课程评论 -->
       <div class="box6">
           <div class="ss">课程评论</div>
           <van-empty
            class="custom-image"
            image="http://120.53.31.103:86/img/empty.0d284c2e.png"
            description="暂无评论"
            />
            
       </div>
<!-- 弹出 -->
   <van-popup
     v-model="ispop"
     closeable
     close-icon-position="top-right"
     position="bottom"
     :style="{ height: '70%' }"
    >
    <div class="boxf">
        <div class="aa">课程服务</div>
        <div v-for="(item,index) in basis_fw" :key="index" class="kk">
           <b>{{item.name}}</b>
           <p>{{item.description}}</p>
     </div>
    </div>
   </van-popup>
      
      <!-- 底 -->
      <div class="btn">
           <van-button type="danger" block  @click="baoming">立即报名</van-button>
      </div>
    </div>   
</template>

<script>
import {basis,kcdg} from "@/http/api"
    export default {
        data(){
            return{
                basis_id:"",//课程详情
                basis_Xq:[],//课程详情
                basis_fw:[],//服务
                basis_tuandui:[],//教学团队
                basis_dgang:[],//课程大纲
                ispop:false,
               
                  activeNames: ['1'],
            }
        },
       mounted(){
           this.basis_id = this.$route.query.basis_id
            // console.log(this.$route.query.basis_id)//basis_id
          this.getZJ_Xq()
          this.getkcdg()
        },
        methods:{
         async  getZJ_Xq(){
                let res =await basis(this.basis_id)
                console.log(res.data.data);
                this.basis_Xq=res.data.data.info
                this.basis_fw=res.data.data.info.service
                 this.basis_tuandui=res.data.data.teachers

            },
          async getkcdg(){
              let res =await kcdg({id:this.basis_id})
                this.basis_dgang=res.data.data[0]
             
              console.log(res.data.data[0],1111111)
          },
          baoming(){//报名
              if (this.basis_Xq.price==this.basis_Xq.underlined_price) {
                  this.$toast.fail('你来晚了，名额没有了')
                  return  false
              }
              this.$router.push('/baoming?'+{type: "3"})
          }  
        }
    }
</script>

<style lang="scss" scoped>
.bg{
    width: 100%;
    height: 20px;
    background: #f0f0f0;
}
.box{
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    position: relative;
       background: #f0f0f0;
    .bar{
        width: 100%;
        height: 200px;
     
        img{
            width: 50%;
            height: 90%;
        }
    }
    .box2{
        width: 100%;
        height: 150px;
        background: white;
        .b2{
           width: 90%;
           margin-left: 10px;
        }
    }
    .fw{
        width: 100%;

        margin: 10px 0;
    }
    .boxf{
        width: 100%;
       .aa{
           text-align: center;
           font-size: 20px;
       }
        .kk{
            font-size: 15px;
             margin: 10%;
            color: gray;
        }
    }
    .box3{
        width: 100%;
        height: 130px;
        background: white;
        margin: 10px 0;
       .tt{
          width: 100%;
          span{
              margin: 2%;
              display: inline-block;
              font-size: 18px;
          }
       }
     
    }
    .box4{
        height: 100px;
        margin: 10px 0px;
        width: 100%;
        background: white;
        .jj{
            margin: 10px 0 10px 20px;
        }
    }
    .box5{
        width: 100%;
        height: 80px;
        margin: 10px 0;
          background: white;
       
    }
    .box6{
        width: 100%;
        height: 300px;
        padding-bottom: 50px;
        margin-top: 10px;
        background: white;
        .ss{
           font-size: 20px;
           margin: 5%;
        }

        
    }
    .btn{
        width: 100%;
         
        .van-button{
        position: fixed;
        bottom: 0;
        left: 20px;
        width: 90%;
         
        border-radius: 50px;
    }
    }
}

</style>