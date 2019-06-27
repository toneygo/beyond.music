// 移入VUE
import vue from 'vue'
// 引入AXIOS库
import axios from 'axios'
// 设置跨域保存session
axios.defaults.withCredentials = true;
// 设置请求服务器的基础路径
axios.defaults.baseURL = "http://127.0.0.1:3000/"
    // 将axios注册
vue.prototype.axios = axios;