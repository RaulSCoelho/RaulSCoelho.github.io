import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Work in progress</h1>
      <p className="mb-4">My website is still not ready, but you can check out my repositories:</p>
      <Link
        href="/repositories"
        className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
      >
        View Repositories
      </Link>
    </div>
  )
}
