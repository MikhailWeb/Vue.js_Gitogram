import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
import user from './modules/user'
import starred from './modules/starred'

export default createStore({
  getters: {
    getUnstarred (state) {
      if (state.trendings.data !== null && state.starred.data !== null) {
        return state.trendings.data.filter((trendingRepos) => !state.starred.data.some((starredRepo) => trendingRepos.id === starredRepo.id))
      }
    }
  },
  modules: {
    trendings,
    auth,
    user,
    starred
  }
})
