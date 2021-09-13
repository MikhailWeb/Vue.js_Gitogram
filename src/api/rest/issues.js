import { makeRequest } from '../requests.js'

export const loadIssues = ({ repo, owner }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`,
  method: 'GET'
})
