import { ReactNode } from 'react'

export const metadata = {
  title: 'RaulSCoelho',
  description: 'RaulSCoelho portifolio'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
