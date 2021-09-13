import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {
    getUserData: (state) => {
      return state.data
    },
    isAuth: (state) => {
      return state.data !== null
    }
  },
  mutations: {
    SET_USER_DATA (state, payload) {
      state.data = payload
    },
    SET_USER_DATA_LOADING (state, payload) {
      state.loading = payload
    },
    SET_USER_DATA_LOAD_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchUser ({ commit, getters }) {
      commit('SET_USER_DATA_LOADING', true)
      commit('SET_USER_DATA_LOAD_ERROR', '')
      try {
        if (getters.getUserData) return true
        const { data } = await api.user.getUser()
        console.log(data)
        commit('SET_USER_DATA', data)
      } catch (error) {
        commit('SET_USER_DATA_LOAD_ERROR', 'Error loading data. ' + error)
        console.log(error)
      } finally {
        commit('SET_USER_DATA_LOADING', false)
      }
      return getters.getUserData
    }
  }
}
