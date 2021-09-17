import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {
    getRepos: (state) => { return state.data }
  },
  mutations: {
    SET_REPOS_DATA (state, payload) {
      state.data = payload
    },
    SET_REPOS_LOADING (state, payload) {
      state.loading = payload
    },
    SET_REPOS_LOAD_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchRepos ({ commit, getters }) {
      commit('SET_REPOS_LOADING', true)
      commit('SET_REPOS_LOAD_ERROR', '')

      try {
        if (getters.getRepos) return

        const { data } = await api.user.getUserRepos()
        commit('SET_REPOS_DATA', data)
      } catch (error) {
        commit('SET_REPOS_LOAD_ERROR', 'Error loading data' + error)
        console.log(error)
      } finally {
        commit('SET_REPOS_LOADING', false)
      }
    }
  }
}
