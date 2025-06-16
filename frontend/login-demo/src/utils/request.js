// utils/request.js
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080',  // 设置你的API基础路径
  timeout: 3000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(

)

// 响应拦截器
service.interceptors.response.use(

)

export default service