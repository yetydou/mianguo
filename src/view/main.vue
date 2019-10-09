<template>
    <div id="app">
        <myheader></myheader>
        <section id="content">
            <div style="background-color: #333">
                <myleft @collapse="leftcollapse"></myleft>
            </div>
            <article id="right" :style="{width:'calc(100vw - ' + leftW+'px)'}" >
                <bread></bread>
                <router-view></router-view>
            </article>
        </section>
    </div>

</template>

<script>
    import {myheader, myleft, bread} from '@/components'

    export default {

        data() {
            return {
                isCollapse: true,
                leftW:201,

            };
        },
        components:{
            myheader,
            myleft,
            bread
        },
        methods:{
            leftcollapse(val){
                if(val){
                    this.leftW=65
                }else{
                    this.leftW=201
                }
            }
        }
    }
</script>


<style>

    #content{
        /*下面整个*/
        display: flex;
        flex:1;
    }

    #right{
        /*页面右侧*/
        padding: 10px;
        flex: 1;
    }



</style>
