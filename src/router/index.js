import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // console.log('meta.auth = ' + to.meta.auth + '  meta.guest = ' + to.meta.guest)
  // console.log(store.getters['user/isAuth'])
  if (!store.getters['user/isAuth'] && localStorage.getItem('token')) {
    if (!await store.dispatch('user/fetchUser')) {
      // console.log('error')
      localStorage.removeItem('token')
    }
  }

  const isAuth = store.getters['user/isAuth']
  const { auth, guest } = to.meta

  if (isAuth && auth) {
    next({ name: 'home' })
  } else if (!isAuth && !auth && !guest) {
    next({ name: 'auth' })
  } else {
    next()
  }
})

export default router
