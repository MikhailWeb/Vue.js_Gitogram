import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: ''
  },
  getters: {
    getRepById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    },
    getRepData: (state) => {
      return state.data
    }
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings
    },
    SET_TRENDINGS_LOADING (state, payload) {
      state.loading = payload
    },
    SET_TRENDINGS_LOAD_ERROR (state, payload) {
      state.error = payload
    },
    SET_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit, getters }) {
      try {
        if (getters.getRepData) return
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (error) {
        commit('SET_TRENDINGS_LOAD_ERROR', 'Error loading data: ' + error)
        console.log(error)
      } finally {
        commit('SET_TRENDINGS_LOADING', false)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currentRep = getters.getRepById(id)
      if (currentRep.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
