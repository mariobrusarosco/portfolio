import { createFileRoute } from '@tanstack/react-router'
import { AboutMainScreen } from '@/domains/about/screens/main'

export const Route = createFileRoute('/about')({
  component: AboutMainScreen,
})
