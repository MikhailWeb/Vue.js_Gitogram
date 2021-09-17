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
    redirect: { name: 'user-repos' },
    component: profile,
    children: [
      {
        path: 'repos',
        name: 'user-repos',
        component: () => import('../pages/profile/repos')
      },
      {
        path: 'following',
        name: 'user-following',
        component: () => import('../pages/profile/following')
      }
    ]
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
