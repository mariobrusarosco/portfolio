import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  Scripts,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import '@/styles/globals.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Mario Brusarosco | Front End Developer',
      },
      {
        name: 'description',
        content:
          'Portfolio showcasing work experience, technical knowledge, and side projects of Mario Brusarosco, Front End Developer.',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
