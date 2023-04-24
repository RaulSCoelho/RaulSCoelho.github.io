import { Repository } from '@/dtos/repository'

export async function getRepos() {
  const response = await fetch('https://api.github.com/users/RaulSCoelho/repos')
  const repos: Repository[] = await response.json()
  return repos
}
