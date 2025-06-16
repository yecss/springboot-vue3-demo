## 项目介绍

这个一个Springboot+Vue3的前后端分离的项目，实现了简单的登录注册功能。

登录界面

![](https://cdn.jsdelivr.net/gh/yecss/imageStore//picgo/image-20250616194501772.png)

登录成功：

![image-20250616194514192](https://cdn.jsdelivr.net/gh/yecss/imageStore//picgo/image-20250616194514192.png)

## 一、技术栈说明

- 后端：Spring Boot
- 前端：Vue 3、Element Plus、Axios

## 二、系统结构概览

```bash
project/
│
├── backend/         # Spring Boot 后端项目
│   ├── controller/
│   ├── service/
│   ├── entity/
│   ├── mapper/
│   ├── config/
│   └── utils/
│
└── frontend/        # Vue 3 前端项目
    ├── views/
    ├── store/
    ├── api/
    ├── router/
    └── components/
```

## 三、前端项目初始化

```
yarn create vue
```

项目名称命名为：login-demo

功能添加：

- pinia
- router
- prettier

启动项目：

```bash
yarn run dev
```

项目预览图：

![image-20250616165002309](https://cdn.jsdelivr.net/gh/yecss/imageStore//picgo/image-20250616165002309.png)

### 引入Element Plus

https://element-plus.org/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5

```
yarn add element-plus
```

main.css里面保留下面的代码即可

```
@import './base.css';
```

### 引入axios

```
yarn add axios
```

创建 Axios 实例（推荐方式）

创建 utils/request.js

```javascript
// utils/request.js
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://api.example.com',  // 设置你的API基础路径
  timeout: 5000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在此添加 token 等信息
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做处理
    return response.data
  },
  error => {
    // 错误处理
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

export default service
```

在组件中使用封装好的实例

```vue
<script setup>
import { ref, onMounted } from 'vue'
import request from '@/utils/request'

const users = ref([])

onMounted(async () => {
  try {
    const data = await request.get('/users') // 注意这里 base URL 已经设置好
    users.value = data
  } catch (error) {
    console.error('获取用户失败:', error)
  }
})
</script>
```



## 四、后端项目初始化

使用IDEA创建项目

![image-20250616181119360](https://cdn.jsdelivr.net/gh/yecss/imageStore//picgo/image-20250616181119360.png)

下一步

![image-20250616181305107](https://cdn.jsdelivr.net/gh/yecss/imageStore//picgo/image-20250616181305107.png)