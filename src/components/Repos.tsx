import { getRepos } from '@/lib/repos'

export default async function Repos() {
  const repos = await getRepos()

  return (
    <div>
      {repos?.map(repo => (
        <h1 key={repo.id}>{repo.name}</h1>
      ))}
    </div>
  )
}
