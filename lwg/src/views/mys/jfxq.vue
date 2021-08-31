<template>
    <div>
积分Xq
    </div>
</template>

<script>
import {jfxq} from "@/http/api.js"
    export default {
        data(){
           return{
               id:this.$route.query.type
           }
        },
      async  created(id){
         let res =await jfxq(id)
         console.log(res);
            
            console.log(this.id,111)
        }
    }
</script>

<style lang="scss" scoped>

</style>