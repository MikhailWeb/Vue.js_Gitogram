import { makeRequest } from '../requests.js'

export const getUser = () => makeRequest({
  url: '/user'
})

export const getUserRepos = () => makeRequest({
  url: '/user/repos'
})

export const getFollowing = ({ login }) => makeRequest({
  url: `/users/${login}/following`
})
