import { Endpoints } from '@octokit/types'

type Repository = Endpoints['GET /users/{username}/repos']['response']['data']

export async function getRepos() {
  const response = await fetch('https://api.github.com/users/RaulSCoelho/repos')
  const repos: Repository = await response.json()
  return repos
}
