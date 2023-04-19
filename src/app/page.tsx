import Repos from '@/components/Repos'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div>
      <h1>Repositories</h1>
      <Suspense fallback={<p>Loading repositories...</p>}>
        {/* @ts-expect-error Async Server Compoenent */}
        <Repos />
      </Suspense>
    </div>
  )
}
