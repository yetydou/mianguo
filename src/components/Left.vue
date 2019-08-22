<template>
    <el-menu
            background-color="#333"
            text-color="#fff"
            active-text-color="yellow"
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            :collapse="false"
            style="width:201px"
    >
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
                <span slot="title">选项3</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>

</template>

<script>

</script>


<style>
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
</style>