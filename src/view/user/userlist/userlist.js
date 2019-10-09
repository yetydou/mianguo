import axios from 'axios'

export default {
    name: "userlist",
    data(){
        var checkAge = (rule, value, callback) => {
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 1 || value>110) {
                        callback(new Error('年龄在1 到110 之间'));
                    } else {
                        callback();
                    }
                }
            });
        };
        var checkTel = (rule, value, callback) => {
            var reg =/^1([38]\d|4[5-9]|5[0-35-9]|6[56]|7[0-8]|9[189])\d{8}$/
            if (!reg.test(value)) {
                callback(new Error('电话号码格式不正确'));
            } else {
                callback();
            }

            // var phone = document.getElementById('phone').value;
            // if(!(/^1[3456789]\d{9}$/.test(phone))){
            //     alert("手机号码有误，请重填");
            //     return false;
            // }
        } ;
        return{
            select: '',
            keywords:'',
            edituserloading:false,
            loading:false,
            userlist: [],
            pageSize:5,
            usercount:0,
            dialogVisible:false,
            form: {
                id:'',
                img:'',
                name: '',
                age: '',
                gender: '1',
                tel: '',
                address:'',
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    {  type: 'number',  message: '年龄必须是正整数', trigger: 'blur' },
                    // {  min: 1, max: 110,message: '年龄在1 到110 之间', trigger: 'blur' },
                    { validator:checkAge, trigger: 'blur' }
                ],
                tel: [
                    // { required: true, message: '请输入年龄', trigger: 'blur' },
                    // {  type: 'number',  message: '年龄必须是正整数', trigger: 'blur' },
                    // {  min: 1, max: 110,message: '年龄在1 到110 之间', trigger: 'blur' },
                    { validator:checkTel, trigger: 'blur' }
                ],
            },
            uploadurl:this.$cfg.BASE_URL+this.$cfg.API.UPLOAD,
            detailmodalvisible:false,
            detailUser(){},
        };
    },
    methods: {
        fmtGender(row){
            return["女","男"][row.gender]||"未知";
        },
        getUserCount(){
            axios.get("/api/user/usercount").then(res => {
                this.usercount=res.data.count;
            })
        },

        //获取用户列表
        getUserList(pageIndex) {
            // console.log(pageIndex)
            this.loading=true
            axios.get("/api/user/list",{
                params:{
                    pageIndex,
                    pageSize:5
                }
            }).then(res => {
                // console.log(res)
                this.userlist=res.data.data;
                this.loading=false
            })
        },

        //删除
        delUser(row) {
            this.$confirm(`确定删除${row.name}吗？`, '系统提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.delete("/api/user/" +row.id)
                    .then(res => {
                        if (res.data.data) {
                            this.$success("删除成功!");
                            this.getUserList()
                        }else{
                            this.$fail("删除失败");
                        }

                    });
            });
        },
        //增加
        saveUserInfo(){
            if(!this.form.name.trim() ||
                !this.form.age||
                !this.form.tel.trim()||
                !this.form.address.trim()
            ){
                return this.$warn("请完整输入用户信息");
            }

            this.dialogVisible=false;
            axios.post('/api/user/',this.form).then(res=>{
                if (res.data.data) {
                    this.$success("保存成功!");
                    this.$refs.frm.resetFields();
                    this.getUserList()
                }else{
                    this.$fail("保存失败!");
                }
            })
        },
        handleAvatarSuccess(res, file) {
            this.form.img = res  ; //URL.createObjectURL(file.raw);
        },
        //上传图片
        beforeAvatarUpload(file) {
            const isImg = ['image/jpeg','image/png','image/gif','image/ico'].includes(file.type) ;
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isImg) {
                return this.$message.error('图片格式不正确!');

            }
            if (!isLt2M) {
                return this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return true;
        },
        //详情
        detail(row){
            axios.get("/api/user/"+row.id)
                .then(res=>{
                    this.detailUser=res.data.data;
                    // console.log(res)
                    this.detailmodalvisible=true;
                });
        },

        //编辑
        editUser(row) {
            this.edituserloading=true,
                this.form.id=row.id,
                this.dialogVisible=true
            axios.get("/api/user/"+row.id)
                .then(res=>{
                    this.edituserloading=false,
                        this.form=res.data.data;
                });
        },

        addUser(){
            this.dialogVisible=true
            // this.form.id=''
        },
        clearUserInfo(){
            this.form={
                id:"",
                img:"",
                name:"",
                age:"",
                gender:"",
                tel:"",
                address:""
            }
        },

    },
    created(){
        this.getUserList();
    }
}