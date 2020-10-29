// 在http.js中引入axios
import axios from 'axios' // 引入axios
const qs = require('qs')
/****** 创建axios实例 ******/

/*全局配置axios*/
//axios.defaults.baseURL = 'https://ak.txwy.tw/artcombat_demo/'

// const service = axios.create({
//     baseURL: baseURL,
//     timeout: 100000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

const api = {
    async get(url, data) {
        try {
            let res = await axios.get(url, { params: data })
            res = res.data
            return new Promise(resolve => {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            })
        } catch (err) {
            console.log('服务器出错')
            console.log(err)
        }
    },
    async post(url, data) {
        try {
            let res = await axios.post(url, qs.stringify(data))
            res = res.data
            return new Promise((resolve, reject) => {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
        } catch (err) {
            // return (e.message)
            console.log('服务器出错')
            console.log(err)
        }
    },
}
export { api }
