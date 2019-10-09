<template>
    <div id="header">
        <div id="logo">一个网站</div>
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333"
            text-color="#fff"
            active-text-color="yellow"
        >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">{{nickname}}</template>
                <el-menu-item index="2-1">修改密码</el-menu-item>
                <el-menu-item index="2-2" @click="$go('/login')">退出</el-menu-item>

            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nickname:sessionStorage.getItem("this.$cfg.CACHE_KEY.LOGIN_USER_NAME")
            }
        }
    }


</script>


<style>
#header{
        padding:0 20px;
        background-color:#333;
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
#logo{
        color: #fff;
        font-size: 25px;
        letter-spacing: 5px;
    }
</style>