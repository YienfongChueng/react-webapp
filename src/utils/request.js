import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://124.223.161.17:3015',
    timeout: 30000
})

instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(response => {
    return response
},err => {
    return Promise.reject(err)
})


export default instance