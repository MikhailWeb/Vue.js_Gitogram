import { makeRequest } from '../requests.js'

export const sendToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'
  const params = new URLSearchParams()

  params.append('client_id', process.env.VUE_APP_GITHUB_AUTH_CLIENT_ID)
  // params.append('scope', 'repo:status read:user')
  params.append('scope', 'public_repo user')

  window.location.href = `${githubAuthApi}?${params}`
}

export const getTokenByCode = ({ code }) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    clientId: process.env.VUE_APP_GITHUB_AUTH_CLIENT_ID,
    code,
    clientSecret: process.env.VUE_APP_GITHUB_AUTH_CLIENT_SECRET
  }
})
