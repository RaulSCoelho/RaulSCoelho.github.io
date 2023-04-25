import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold text-skin-base">Work in progress</h1>
      <p className="mb-4 text-skin-muted">My website is still not ready, but you can check out my repositories</p>
      <Link
        href="/repositories"
        className="rounded-md bg-skin-button px-4 py-2 text-skin-inverted transition-colors duration-300 hover:bg-skin-button-hover"
      >
        View Repositories
      </Link>
    </div>
  )
}
