import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {
    getFollowings: (state) => {
      return state.data
    }
  },
  mutations: {
    SET_FOLLOWING_DATA (state, payload) { state.data = payload },
    SET_FOLLOWING_LOADING (state, payload) { state.loading = payload },
    SET_FOLLOWING_LOAD_ERROR (state, payload) { state.error = payload }
  },
  actions: {
    async fetchFollowing ({ commit, getters }, { login }) {
      commit('SET_FOLLOWING_LOADING', true)
      commit('SET_FOLLOWING_LOAD_ERROR', '')

      try {
        if (getters.getFollowings) {
          return
        }
        const { data } = await api.user.getFollowing({ login })
        commit('SET_FOLLOWING_DATA', data)
      } catch (error) {
        commit('SET_FOLLOWING_LOAD_ERROR', 'Error loading data. ' + error)
        console.log(error)
      } finally {
        commit('SET_FOLLOWING_LOADING', false)
      }
    }
  }
}
