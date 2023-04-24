import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Work in progress</h1>
      <p className="mb-4">My website is still not ready, but you can check out my repositories:</p>
      <Link
        href="/repositories"
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
      >
        View Repositories
      </Link>
    </div>
  )
}
