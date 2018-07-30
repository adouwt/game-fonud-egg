import {
  NEWS_800011,
  NEWSDETAIL_800012
} from './mutation-types'

export default {
  [NEWS_800011] (state, payload) {
    state.newsResult = payload
  },
  [NEWSDETAIL_800012] (state, payload) {
    state.newsDetail = payload
  }
}
