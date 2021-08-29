<template>
    <div class="box">
        
            <van-swipe class="bar" :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="(item,index) in arr" :key="index">
                    <img :src="'/img/'+item" alt="">
                </van-swipe-item>
            </van-swipe>

          
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        icont:''
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background:#f0f0f0;
  .bar {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .d{
      width: 100%;
      height: 100px;
      background: white;
      .dd{
          width: 100%; 
         .ddd{
            margin-left: 10px;
              .van-icon{
            font-size: 30px;   
            margin-top: 10px;  
          }
         .s{
             display: block;
         }
         }

      }
  }
  .ss{
      width: 5px;
      height: 20px;
      background: red;
      margin-left: 15px;
      display: inline-block;
    
  }
}
</style>