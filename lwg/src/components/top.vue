<template>
    <div class="box">
        <div class="top"  v-show="top" @click="istop">
             <van-icon name="back-top" color="#1989fa"  size="30"  />
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                top:false,
            }
        },
        mounted(){
         window.addEventListener("scroll",()=>{
             let html =document.documentElement
             if (html.scrollTop>=100) {
                 this.top=true
             } else {
                 this.top=false
             }
         })
        },
        methods:{
             istop(){
                //  document.documentElement.scrollTop=0
                 let html =document.documentElement
                 var timer = setInterval(() => {
                     if (html.scrollTop<=0) {
                         clearInterval(timer)
                     }
                     html.scrollTop=html.scrollTop-20
                 }, 10);
             }
        }
    }
</script>

<style lang="scss" scoped>
.box{
    position: relative;
    .top{
        position: fixed;
        right: 20px;
        bottom: 60px;
        padding: 20px;
        background: rgba(0,155,0,.3);
    }
}
</style>