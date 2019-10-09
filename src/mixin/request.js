import Vue from 'vue'
import axios from 'axios'

var instance = axios.create({
    baseURL:'http://192.168.100.204:8000'
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    console.log(`${config.method}了${config.url}.参数是${JSON.stringify(config.data).url}`)
    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.request.use(function (response) {
    console.log(`返回了`,response)
    return response;
});



// Vue.prototype.$http = instance

//让get和post变得一样
export default {
    get(url,data){
        return instance.get(url,{
            params:data
        })
    },
    post(url,data){
        return instance.post(url,data).catch(err => {
            if(err.message=== 'Network Error')
                this.$fail('服务器异常，请稍后重试')
        });
    }
}


// export default instance



//原来写法
// this.xxx.get(xxx,{
//     params:{}
// })
// this.xxx.post(xxx,{xxx数据})