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
      state.data = trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
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
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
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
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: error
          }
        })
        console.log(error)
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: true,
          loading: true,
          error: ''
        }
      })
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false
          }
        })
      } catch (error) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true,
            error: error
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
