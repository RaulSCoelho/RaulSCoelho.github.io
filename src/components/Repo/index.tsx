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
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-min overflow-hidden"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">{repo.language}</p>
        <p className="text-sm text-gray-500">
          <FaStar className="inline-block mr-1" />
          {repo.stargazers_count}
        </p>
      </div>
      <div className="bg-gray-200 p-4 flex items-center">
        <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
      </div>
    </a>
  )
}
