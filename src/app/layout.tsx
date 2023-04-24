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
        <div className="h-screen p-20 flex items-center justify-center">
          <div className="overflow-hidden w-full h-full max-w-[1480px]">{children}</div>
        </div>
      </body>
    </html>
  )
}
