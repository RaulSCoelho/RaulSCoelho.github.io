import { Repo } from '@/components/Repo'
import { getRepos } from '@/lib/repos'

export const metadata = {
  title: 'Repositories'
}

export default async function Repositories() {
  const repos = await getRepos()

  return (
    <div className="flex h-full flex-col">
      <h1 className="mb-8 text-3xl font-bold">Repositories</h1>
      <div className="grid grid-cols-1 gap-4 overflow-auto px-2 pb-8 scrollbar scrollbar-track-transparent scrollbar-thumb-[#ffffff4b] sm:grid-cols-2 md:grid-cols-3">
        {repos?.map(repo => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  )
}
