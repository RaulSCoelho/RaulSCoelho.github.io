import { Repository } from '@/dtos/repository'
import { FaStar } from 'react-icons/fa'

interface RepositoryProps {
  repo: Repository
}

export function Repo({ repo }: RepositoryProps) {
  const lastUpdated = new Date(repo.pushed_at as string).toLocaleDateString()

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-min flex-col overflow-hidden rounded-lg bg-skin-card shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-skin-inverted">{repo.name}</h2>
      </div>
      <div className="flex items-center justify-between p-4 backdrop-brightness-95">
        <p className="text-sm text-gray-500">{repo.language}</p>
        <p className="text-sm text-gray-500">
          <FaStar className="mr-1 inline-block" />
          {repo.stargazers_count}
        </p>
      </div>
      <div className="flex items-center p-4 backdrop-brightness-90">
        <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </div>
    </a>
  )
}
