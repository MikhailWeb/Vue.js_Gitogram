import feeds from '../pages/feeds/feeds.vue'
import profile from '../pages/profile/profile.vue'
import Stories from '../pages/stories/stories.vue'
import notFound from '../pages/404/404.vue'

export default [
  {
    path: '/',
    component: feeds
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]
