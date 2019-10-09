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
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },

                tooltip:{},//随鼠标移动会有显示信息
                series: [
                 {
                    name:"访问量",
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };

            // 绘制图表
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>