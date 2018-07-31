// /* eslint-disable no-undef */
// import {
//   NEWSDETAIL_800012
// } from './mutation-types'
// import 'babel-polyfill'
// import axios from '../plugins/axios'
// import qs from 'qs'

// export default {
//   我的账单
//   actionBill103007 ({ dispatch, commit }, {memberId, queryDate}) {
//     return new Promise((resolve, reject) => {
//       axios.post(`${process.env.VUE_APP_BASE_NAME}/thumbService`, qs.stringify({method: '103007', dataJson: {memberId: memberId, queryDate: queryDate}}))
//         .then(res => {
//           resolve(res.data)
//         })
//         .catch(error => {
//           console.info(error)
//         })
//     })
//   }
// }
