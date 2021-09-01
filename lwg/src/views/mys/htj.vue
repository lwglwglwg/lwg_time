<template>
    <div class="box">
<!-- 好课推荐 -->
       <div class="box1">
           <div class="left">
               <img src="@/assets/img/我的/my.jpg" alt="">
           </div>
           <div class="center">
               <p><b class="bb">{{$store.state.token.nickname}}</b></p>
               <p><span>积分:29</span></p>
           </div>
           <div class="right">
                <span class="s" >兑换记录</span>
           </div>
       </div>
       <!-- 搜索 -->
       <div class="search">
           <van-search
           shape="round"
           placeholder="请输入搜索关键词"
           @click="$router.push('/mys/search')"
         />
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    .box1{
        width: 100%;
        height: 150px;
        
        background: red;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left{
            width: 20%;
            height: 150px;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin: 50px 0 50px 20px;
            }
        }
        .center{
            flex:1;
            margin-left: 20px;
            color: white;
            .bb{
                font-size: 18px;
                
            }
        }
        .right{
            width: 20%;
            .s {
             color: white;
             padding: 5px 10px;
             border-radius: 50px;
             border: 1px solid white;
            
           }
        }
    }
    .search{
        position: relative;
        .van-search{
            width: 90%;
            height: 37px;
            position: absolute;
            top: -20px;
            left: 18px;
            border-radius: 50px;
            border: 1px solid #f0f0f0;
            box-shadow: 0 0 10px ;
        }
    }
}
</style>