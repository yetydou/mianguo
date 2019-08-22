<template>
  <div id="app">
    <myheader></myheader>
    <section id="content">
      <myleft></myleft>
      <article id="right"></article>

    </section>
  </div>

</template>

<script>
  import {myheader, myleft} from './components'


export default {
    data() {
      return {
          isCollapse: true
      };
    },
    components:{
        myheader,
        myleft
    }
  }
</script>


<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#content{
  /*下面整个*/
  display: flex;
  flex:1;
}

#right{
  /*页面右侧*/
  background-color:grey;
}



</style>
