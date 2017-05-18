import axios from 'axios'

// ACTION TYPES
const REPOS_ORDERED_BY_STARS = 'REPOS_ORDERED_BY_STARS'
const PULL_REQUESTS = 'PULL_REQUESTS'

const URL_REPOS_ORDERED_BY_STARS_PREFIX = 'https://api.github.com/search/repositories?q='
const URL_REPOS_ORDERED_BY_STARS_POSTFIX = 'stars:%3E1&sort=stars&order=desc'
// const URL_PULL_REQUESTS = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls'
const URL_PULL_REQUESTS = 'https://api.github.com/repos/'
const initialState = {}

// REDUCERS
export default function (state = initialState, action = {}) {
console.log(action.type)
  switch (action.type) {


    case REPOS_ORDERED_BY_STARS:
      return {
        ...state,
        repos: action.payload.data,
      }

    case PULL_REQUESTS:
      console.log(action.payload.data[0].user.login)
      return {
        ...state,
        pullRequests: action.payload.data
      }

    default:
      return state
  }
}

// ACTIONS
export function getRepositoryOrderedByStars (term) {
  let URL = ''
  if (term) {
    URL = `${URL_REPOS_ORDERED_BY_STARS_PREFIX}${term}?${URL_REPOS_ORDERED_BY_STARS_POSTFIX}`
  } else {
    URL = `${URL_REPOS_ORDERED_BY_STARS_PREFIX}${URL_REPOS_ORDERED_BY_STARS_POSTFIX}`
  }

  console.log(URL, term)
  const request = axios.get(`${URL}`)

  return {
    type: REPOS_ORDERED_BY_STARS,
    payload: request
  }
}

export function getPullRequests (repoUrl) {
  const URL = `${URL_PULL_REQUESTS}${repoUrl}/pulls`

  console.log(URL, repoUrl)
  const request = axios.get(`${URL}`)

  return {
    type: PULL_REQUESTS,
    payload: request
  }
}
