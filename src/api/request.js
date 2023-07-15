import axios from "axios"
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
})

// 请求拦截器:拦截下用户的请求，执行完一系列处理再发送出去（如添加cookie、token）
service.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = localStorage.getItem('token')
    return config
}, error => {
    return Promise.reject(new Error(error))
})

service.interceptors.response.use((response) => {
    // console.log(response)
    const status = response.status
    const { data, errmsg } = response.data
    if ((status === 200 || status === 201) && errmsg === '') {
        return data
    } else {
        ElMessage.error(errmsg)
        return Promise.reject(new Error(errmsg))
    }
}, error => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
})
export default service
