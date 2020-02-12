const state = {
  session: '',
  isWaiting: false
}

const mutations = {
  SET_SESSION: (state, session) => {
    state.session = session
  },
  SET_ISWAITING: (state, isWaiting) => {
    state.isWaiting = isWaiting
  }
}

const actions = {
  setSession({ commit }, session) {
    commit('SET_SESSION', session)
  },
  setIsWaiting({ commit }, isWaiting) {
    commit('SET_ISWAITING', isWaiting)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

