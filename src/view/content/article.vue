<template>

    <!--用iview-->
    <div>
        <div margin="10px 0">
            <Button type="primary" size="large" @click="showaddmodal=true">添加文章</Button>
        </div>
        <Table :columns="cols1" :data="userlist"></Table>
        <Modal v-model="showmodal" :title="title" footer-hide>
           作者：{{name}} <br/>
           年龄：{{age}}
        </Modal>

        <Modal v-model="showaddmodal" title="添加文章" @on-ok="save" >
            <Form :model="formItem" :label-width="80">
                <FormItem label="姓名">
                    <Input v-model="formItem.name" placeholder="输入"></Input>
                </FormItem>
                <FormItem label="年龄">
                    <Input v-model="formItem.age" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>

                <tinymce-editor :init="{plugins: 'wordcount'}"></tinymce-editor>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'
    import axios from 'axios'
    export default {
        components: {
            'tinymce-editor': Editor // <- Important part
        },
        data () {
            return {
                formItem:{
                    name:'',
                    age:'',
                },
                name:'',
                age:'',
                title:"",
                showaddmodal:false,
                showmodal:false,
                cols1: [
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '作者',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '操作',
                        key: 'userid',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props:{
                                        type:"primary",
                                        size:"small"
                                    },
                                    style:{
                                        margin:'5px'
                                    },
                                    on:{
                                        click:(row) =>{
                                            // this.$get("/articleinfo",{
                                            //     id:params.row.id,
                                            // }).then(res=>{
                                            //     console.log(res.data)
                                            //     this.showmodal=true;
                                            // })
                                            // console.log(params.row.id)
                                            axios.get("/api/user/"+params.row.id)
                                                .then(res=>{
                                                    console.log(res.data)
                                                    this.name=res.data.data.name
                                                    this.age=res.data.data.age
                                                    this.showmodal=true
                                                });
                                        }
                                    }
                                },'详情'),
                                h('Button', {
                                    props:{
                                        type:"warning",
                                        size:"small"
                                    },
                                },'编辑'),
                                h('Button',{
                                    props:{
                                        type:"error",
                                        size:"small"
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                userlist:[]
            }
        },
        methods:{
            //刷新
            getlist() {
                axios.get("/api/user/list").then(res => {
                    this.userlist=res.data.data;
                })
            },
            save () {
                axios.post('/api/user/',this.formItem).then(res=>{
                       if (res.data.data) {
                           this.$success("保存成功!");
                           // this.$refs.frm.resetFields();
                           this.getlist()
                       }else{
                           this.$fail("保存失败!");
                           console.log("hh")
                       }
                })
            },
        },
        created(){
            this.getlist();
        }
    }
</script>

<style scoped>

</style>