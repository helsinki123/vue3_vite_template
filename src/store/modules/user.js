const user = {
  state: {
    userName: '',
    userId: ''
  },
  // commit('user/setUserInfo')
  mutations: {
    setUserInfo(state, { userName, userId }) {
      // `state` is the local module state
      state.userName = userName
      state.userId = userId
    }
  },
  // dispatch('user/setUserInfo')
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
    }
  }
}
export default user
