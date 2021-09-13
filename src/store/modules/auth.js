import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.sendToAuthPage()
    },

    async authUserByCode (store, code) {
      const { data } = await api.auth.getTokenByCode(code)
      return data.token
    },

    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
