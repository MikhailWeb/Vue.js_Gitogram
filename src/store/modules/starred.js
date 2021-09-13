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
    SET_STARRED_DATA (state, payload) {
      state.data = payload.map(item => {
        item.issues = {
          data: null,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_STARRED_LOADING (state, payload) {
      state.loading = payload
    },
    SET_STARRED_LOAD_ERROR (state, payload) {
      state.loading = payload
    },
    SET_ISSUES: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.issues = {
            ...repo.issues,
            ...payload.data
          }
        }
        return repo
      })
    }
  },
  actions: {
    async fetchStarred ({ commit, getters }, { limit }) {
      commit('SET_STARRED_LOADING', true)
      commit('SET_STARRED_LOAD_ERROR', '')

      try {
        const { data } = await api.starred.getStarred({ limit })
        commit('SET_STARRED_DATA', data)
      } catch (error) {
        commit('SET_STARRED_LOAD_ERROR', 'Error loading data' + error)
        console.log(error)
      } finally {
        commit('SET_STARRED_LOADING', false)
      }
    },
    async setIssues ({ commit, getters }, repId) {
      commit('SET_ISSUES', {
        id: repId,
        data: {
          loading: true,
          error: ''
        }
      })

      try {
        const currentRep = getters.getRepById(repId)

        if (currentRep.issues.data !== null) {
          return
        }

        const { data } = await api.issues.loadIssues({ owner: currentRep.owner.login, repo: currentRep.name })
        commit('SET_ISSUES', {
          id: repId,
          data: {
            data: data
          }
        })
      } catch (error) {
        commit('SET_ISSUES', {
          id: repId,
          data: {
            loading: false,
            error: error
          }
        })
        console.log(error)
      } finally {
        commit('SET_ISSUES', {
          id: repId,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
