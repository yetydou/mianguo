<template>
    <div :id="id" :style="{width,height}">

    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        props:['width','height','id'],
        name: "chartline",
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById(this.id));


            var option = {
                title : {

                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data:['互联网','金融','媒体广告','教育','服务','其他'],

                    selected: ['直接访问']
                },
                series : [
                    {
                        name: '人数',
                        type: 'pie',
                        radius : '55%',
                        center: ['40%', '50%'],
                        data: [
                            {value:335, name:'互联网'},
                            {value:310, name:'金融'},
                            {value:234, name:'媒体广告'},
                            {value:135, name:'教育'},
                            {value:1548, name:'服务'},
                            {value:222, name:'其他'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };




            // 绘制图表
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>