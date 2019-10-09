<template>
    <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 10px 0">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="menu1">{{menu1}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{menu2}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "bread",
        watch:{
            $route(val){
                this.menu1=val.meta.parentName
                this.menu2=val.meta.title
                // console.log(val.meta.parentName,val.me)
            }

        },
        data(){
            return{
                menu1:"",
                menu2:""
            }
        },
        created(){
            this.menu1=this.$route.meta.parentName
            this.menu2=this.$route.meta.title
        }
    }
</script>

<style scoped>

</style>