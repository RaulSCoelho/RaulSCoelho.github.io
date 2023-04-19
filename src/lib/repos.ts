export interface Repo {
  id: number
  name: string
  full_name: string
}

export async function getRepos() {
  const response = await fetch('https://api.github.com/users/RaulSCoelho/repos')
  const repos: Repo[] = await response.json()
  return repos
}
