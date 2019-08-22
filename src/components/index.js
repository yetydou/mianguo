//方法1
// import header from './Header'
// import left from './Left'
//
// export var myheader =header
// export var myleft =left



//方法2
export var myheader =() =>import('./Header.vue')
export var myleft =() =>import('./Left.vue')


//方法3
// import header from './Header'
// import left from './Left'
// //export default {
//     header,
//     left
// }