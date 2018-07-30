const axios = require('axios')
let options = {}
const instance = axios.create(options)
//  拦截器
instance.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error.response)
})

module.exports = instance
