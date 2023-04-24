import { Repository } from '@/dtos/repository'

export async function getRepos() {
  const response = await fetch('https://api.github.com/users/RaulSCoelho/repos')
  const repos: Repository[] = await response.json()

  repos.sort((a, b) => new Date(b.updated_at as string).getTime() - new Date(a.updated_at as string).getTime())

  return repos
}
