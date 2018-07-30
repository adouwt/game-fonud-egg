import * as axios from 'axios'
import router from '../router'
let options = {}
const instance = axios.create(options)

instance.interceptors.response.use((res) => {
  return res
}, (error) => {
  if (error.response.status === 666) {
    router.replace({path: '/status666'})
  }
  return Promise.reject(error.response)
})

export default instance
