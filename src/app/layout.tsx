import { ReactNode } from 'react'
import '../styles/global.css'

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
      <body className="bg-[#7F7FD5] bg-app">
        <div className="flex h-screen items-center justify-center p-20">
          <div className="h-full w-full max-w-[1480px] overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}
