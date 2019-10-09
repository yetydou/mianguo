<template>
    <div style="display: flex;flex-direction: column;justify-content: space-between">
        <!--第一行-->
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card" style="height: 250px">
                    <div slot="header" class="clearfix">
                        <span>快捷入口</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>
                    <el-row :gutter="20" class="kjrk">
                        <el-col :span="8">
                                <el-button type="primary"><i class="el-icon-edit" ></i>添加用户</el-button>
                            </el-col>
                        <el-col :span="8">
                                <el-button type="success"><i class="el-icon-s-custom" ></i>用户管理</el-button>
                            </el-col>
                        <el-col :span="8">
                                <el-button type="warning"><i class="el-icon-s-comment"></i>帖子管理</el-button>
                            </el-col>
                        <el-col :span="8">
                                <el-button type="danger"><i class="el-icon-phone" ></i>投诉管理</el-button>
                            </el-col>
                    </el-row>
                </el-card>
            </el-col>

            <el-col :span="8">
                <el-card class="box-card" style="height: 250px">
                    <div slot="header" class="clearfix">
                        <span>数据统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>

                    <el-row :gutter="20" class="sjtj">
                        <el-col class="item" :span="12">
                            新增用户/
                            <span>{{nickname}}</span>人
                        </el-col>
                        <el-col class="item" :span="12">
                            新增帖子/
                            <span>180</span>篇
                        </el-col>
                        <el-col class="item" :span="12">
                            新增充值/
                            <span>150.000</span>元
                        </el-col>
                        <el-col class="item" :span="12">
                            新增投诉/
                            <span>150</span>条
                        </el-col>
                    </el-row>

                </el-card>
            </el-col>

            <el-col :span="8">
                <el-card class="box-card" style="height:250px ;">
                    <iframe allowtransparency="true" frameborder="0" width="385" height="96" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=385&h=96&align=center"></iframe> </el-card>
            </el-col>

        </el-row>

        <!--中间空的部分-->
        <div style="height: 30px;">
        </div>

        <!--第二行-->
        <el-row :gutter="20">

            <!--第一块-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>上周统计</span>
                    </div>
                        <chartscolumn id="c1" width="400px" height="300px"></chartscolumn>
                </el-card>
            </el-col>
            <!--第二块-->
            <el-col :span="8">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>访问量</span>
                    </div>

                        <chartsline id="c2" width="400px" height="300px"></chartsline>

                </el-card>
            </el-col>
            <!--第三块-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>行业成分</span>
                    </div>

                        <chartspie id="c3" width="400px" height="300px"></chartspie>

                </el-card>
            </el-col>

        </el-row>

    </div>
</template>

<script>
    import {chartscolumn,chartsline,chartspie} from '@/components'
    import {mapState} from 'vuex'
    export default {
        components:{
            chartscolumn,
            chartsline,
            chartspie
        },
        computed:{
            ...mapState(["nickname"])
        },
        data() {
            return {
                today: new Date()
            }
        }
    }
</script>

<style>
.kjrk button{
    margin: 15px 0;
    height: 40px !important;
}
.sjtj .item{
    padding:20px;
    font-size: 14px;
    display:flex;
    align-items: center;
}
.sjtj .item span{
    color: #f34a30;
    font-size: 20px;
}
.el-calendar-day{
    width: 40px ;
    height: 28px !important;
    text-align: center;
}

</style>