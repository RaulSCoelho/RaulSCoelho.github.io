import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'RaulSCoelho',
    template: '%s | RaulSCoelho'
  },
  icons: {
    icon: '/favicon.png'
  },
  description: 'Raul Semicek Coelho personal website'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
