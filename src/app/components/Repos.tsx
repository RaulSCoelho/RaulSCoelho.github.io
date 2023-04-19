'use client'

import { getRepos } from '@/lib/repos'
import { use } from 'react'

export default function Repos() {
  const repos = use(getRepos())

  return (
    <div>
      {repos?.map(repo => (
        <h1 key={repo.id}>{repo.name}</h1>
      ))}
    </div>
  )
}
