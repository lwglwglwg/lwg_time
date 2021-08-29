<template>
    <div class="box">
         <div class="left">
           <van-icon name="bill"/>
         </div>
         <div class="center">
               <van-icon name="search"/>
            <div> <input type="text" placeholder="搜索"></div>
         </div>
         <div class="right">
           <van-icon name="label" />
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
    height: 50px;
    text-align:center;
    line-height:50px;
    display: flex;
    text-align: center;
    .left,.right{
        width: 10%;
        height: 30px;
        line-height: 60px;
        .van-icon{
            font-size:24px;
           
        }
    }
    .center{
        position: relative;
        width: 80%;
        height: 50px;
        flex: 1;
        input{
            font-size: 15px;
            border-radius: 25px;
            padding-left: 10px;
            box-sizing: border-box;
        }
        .van-icon{
            position: absolute;
            top: 15px;
            right: 10px;
            font-size: 15px;

        }
        input{
            height: 30px;
            line-height: 30px;
            width: 100%;
            padding: 1px;
        }
    }
    
}
</style>