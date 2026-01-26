import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/side-projects/')({
  component: SideProjectsComponent,
})

function SideProjectsComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-serif text-5xl font-bold text-blue-500 md:text-6xl">
        Side Projects
      </h1>
      <p className="mt-6 text-lg text-white/80">
        Personal projects and experiments.
      </p>
      {/* TODO: Add side projects content */}
    </div>
  )
}
