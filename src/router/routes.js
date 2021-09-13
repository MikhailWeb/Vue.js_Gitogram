import auth from '../pages/auth/auth.vue'
import feeds from '../pages/feeds/feeds.vue'
import profile from '../pages/profile/profile.vue'
import Stories from '../pages/stories/stories.vue'
import notFound from '../pages/404/404.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: feeds
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      auth: true
    },
    component: auth
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      guest: true
    },
    component: notFound
  }
]
