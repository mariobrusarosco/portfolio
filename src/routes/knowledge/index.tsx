import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledge/')({
  component: KnowledgeComponent,
})

function KnowledgeComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-serif text-5xl font-bold text-purple-500 md:text-6xl">
        Knowledge
      </h1>
      <p className="mt-6 text-lg text-white/80">
        Technical skills and expertise.
      </p>
      {/* TODO: Add knowledge content */}
    </div>
  )
}
