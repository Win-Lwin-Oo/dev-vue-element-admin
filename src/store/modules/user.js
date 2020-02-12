import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const proto = require('../../proto/proto.js').nested

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  // 定时器拦截
  interValWaiting: false,
  // 定时器函数
  intervalFunc: null,
  curUserInfo: {
    account: '',
    name: '',
    id: 0,
    permission: [],
    watchUsers: []
  },
  gameList: [],
  baiJiaOdds: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_CURUSER: (state, curUserInfo) => {
    state.curUserInfo = curUserInfo
  },
  SET_GAMELIST: (state, gameList) => {
    state.gameList = gameList
  },
  SET_ODDS: (state, baiJiaOdds) => {
    state.baiJiaOdds = baiJiaOdds
  }
  // SET_INTERVAL: (state, interval) => {
  //   if (state.intervalFunc) clearInterval(state.intervalFunc)
  //   if (interval) {
  //     state.intervalFunc = setInterval(() => {
  //       state.interValWaiting = !state.interValWaiting;
  //       console.log('定时获取', state.interValWaiting)
  //     }, 500)
  //   }
  // }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  },
  // 获取当前用户数据
  setCurUserInfo({ commit }, userInfo) {
    commit('SET_CURUSER', userInfo)
  },
  setGameList({ commit }, gameList) {
    commit('SET_GAMELIST', gameList)
  },
  setOddsInfo({ commit }, baiJiaOdds) {
    commit('SET_ODDS', baiJiaOdds)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
