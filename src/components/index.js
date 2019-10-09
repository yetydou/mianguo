//方法1
// import header from './Header'
// import left from './Left'
//
// export var myheader =header
// export var myleft =left



//方法2
export var myheader =() =>import('./Header.vue')
export var myleft =() =>import('./Left.vue')
export var bread = () =>import('./bread.vue')

export var chartscolumn =() => import('./echarts/column.vue')
export var chartsline =() => import('./echarts/line.vue')
export var chartspie =() => import('./echarts/pie.vue')


//方法3
// import header from './Header'
// import left from './Left'
// //export default {
//     header,
//     left
// }