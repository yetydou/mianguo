<template>
    <div :id="id" :style="{width,height}">

    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        props:['width','height','id'],
        name: "column",
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById(this.id));
            // 绘制图表
            myChart.setOption({
                title: {

                },
                tooltip: {},
                xAxis: {
                    data: ['新增用户','新增帖子','新增投诉','新增会员']
                },
                yAxis: {},
                series: [{
                    name: '点击量',
                    type: 'bar',
                    data: [5, 20, 36, 10]
                }]
            });
        }
    }
</script>

<style scoped>

</style>