import DateTools from '@/utils/DateTools'
const proto = require('../../proto/proto.js').nested

const state = {
  interValWaiting: false,
  intervalFunc: null,
  // 当前未处理申请数量
  requestNum: 0,
  // 当前未处理充值申请数量
  rechargeNum: 0,
  // 当前未处理提现申请数量
  withDrawNum: 0,
  // 最新请求时间
  lastRechargeTime: 0,
  lastWithDrawalTime: 0,
  lastReadTime: 0
}

const mutations = {
  SET_INTERVAL: (state, interval) => {
    if (state.intervalFunc) clearInterval(state.intervalFunc)
    if (interval) {
      state.intervalFunc = setInterval(async() => {
        if (state.interValWaiting) return
        const curUser = await dispatch('user/')
        let date = DateTools.getDateStr(new Date())
        let info = {
          // account: this.us.basicInfo.account,
          // name: this.us.basicInfo.name,
          pageIndex: 1,
          pageSize: 10,
          startDate: date,
          endDate: date,
          checkStatus: 0,
          channelId: -1
        }
        console.log('定时获取', state.interValWaiting)
      }, 500)
    }
  }
}

const actions = {
  // user login
  startTimer({ commit }) {
    commit('SET_INTERVAL', 1)
  },
  endTimer({ commit }) {
    commit('SET_INTERVAL', 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
