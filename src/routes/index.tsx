import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-white md:text-8xl">
          Mario Brusarosco
        </h1>
        <p className="mt-4 text-xl text-white/80 md:text-2xl">
          Front End Developer
        </p>
        <nav className="mt-12 flex flex-col gap-4 md:flex-row md:justify-center">
          <a
            href="/experience"
            className="rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600"
          >
            Experience
          </a>
          <a
            href="/knowledge"
            className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
          >
            Knowledge
          </a>
          <a
            href="/side-projects"
            className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Side Projects
          </a>
        </nav>
      </div>
    </div>
  )
}
