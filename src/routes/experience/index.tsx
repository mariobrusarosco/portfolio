import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experience/')({
  component: ExperienceComponent,
})

function ExperienceComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-serif text-5xl font-bold text-pink-500 md:text-6xl">
        Experience
      </h1>
      <p className="mt-6 text-lg text-white/80">
        Work experience and professional journey.
      </p>
      {/* TODO: Add experience content */}
    </div>
  )
}
