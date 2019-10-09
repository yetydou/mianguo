<template>
    <div style="position:relative; height: 100%">
        <el-menu
                @open="open"
                ref="headermenu"
                @select="selectitem"
                :unique-opened="true"
                :default-active="activeIndex"
                background-color="#333"
                text-color="#fff"
                active-text-color="yellow"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                router
        >
            <el-menu-item index="1" route="/">
                <i class="el-icon-setting"></i>
                <span slot="title" >工作平台</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">内容管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" route="/article">文章列表</el-menu-item>
                    <el-menu-item index="2-2" route="/company">公司列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1" route="/user">用户列表</el-menu-item>
                    <el-menu-item index="3-2" route="/company2">公司列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>

        <div class="arrow" >
            <i class="arrow" :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" @click="isCollapse=!isCollapse"></i>
        </div>

    </div>

</template>

<script>
export default {
    watch:{
        isCollapse(newval){
            this.$emit('coolapse',newval)
        }
    },
    mounted(){
        this.activeIndex=this.$route.meta.index
    },
    methods:{
        open(index){
            this.openmenuidx=index
        },
        selectitem(i){
            if(!i.includes('-')){
                console.log(this.openmenuidx)
                this.$refs.headermenu.close(this.openmenuidx)
            }
        }
    },
    data(){
        return{
            activeIndex:"1",
            isCollapse:false,
            openmenuidx:-1
        }
    }
}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
#app{
    /*下面整个*/
    display: flex;
    height: 100vh;
    flex-direction: column;
}
#left{
    display: flex;
    flex:1;
    height: 100vh;
    flex-direction: column;
}
.arrow{
    position: absolute;
    left: calc(50% - 15px);
    bottom: 100px;
    width: 25px;
    color: white;
    font-size: 25px;
}
</style>