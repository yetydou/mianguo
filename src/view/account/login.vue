<template>
    <div class="container">
        <div class="content">
            <el-card class="box-card content" shadow="hover">
                <el-form ref="form" :model="form" v-loading="loading" :rules="rules">
                    <el-form-item style="text-align: center;">
                       <div style="font-size: 22px">
                           后台管理系统
                       </div>
                    </el-form-item>
                    <el-form-item prop="tel">
                        <el-input v-model.trim="form.tel" placeholder="请输入内容" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input v-model.trim="form.pwd" prefix-icon="el-icon-lock" type="password" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!--<el-button type="primary" style="width: 100%" @click="$go('/user')">登录</el-button>-->
                        <el-button type="primary" style="width: 100%" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                loading: false,
                form: {
                    tel: "",
                    pwd: "",
                },
                rules: {
                    tel: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }],
                    pwd: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods:{
            onSubmit(){
                if(!this.form.tel || !this.form.pwd ===0){
                    this.$warn("用户名或密码不能为空")
                }
                this.loading=true

                sessionStorage.removeItem("username")

                axios({
                    method: 'post',
                    url: '/api/login',
                    params: {
                        tel: this.form.tel,
                        pwd: this.form.pwd
                    }
                }).then(({data}) => {

                    this.loading=false
                    // console.log(data)
                    if (data.code !== 0){
                        this.$fail("用户名或密码错误")
                    } else {
                        this.$success("登录成功")
                        setTimeout(()=>{
                            this.$go('/')
                        },500)
                        sessionStorage.setItem("username",this.form.tel)
                    }
                })
                this.$go("/")
            }
        }
    }
</script>

<style lang="scss">
    $w:100vw;
    $h:100vh;
.container{
    width:$w;
    height:$h/2;
    background:linear-gradient(to bottom, #41c0e4,white);
    opacity: 0;
    animation: change 0.5s 0.2s forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    font:{
        size:20px;
        family:"宋体";
        weight:bold;
    }
    .content{
        width:500px;
        height:300px;
        background: white;
    }
}
    @keyframes change {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

</style>