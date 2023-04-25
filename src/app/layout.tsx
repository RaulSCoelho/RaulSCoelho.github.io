import '../styles/global.css'
import { ReactNode } from 'react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ThemesProvider } from '@/hooks/useTheme'

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
      <body className="bg-[#7F7FD5] bg-app">
        <div className="flex h-screen flex-col items-center justify-center p-10">
          <ThemesProvider>
            <ThemeSwitcher />
            <div className="mt-2 h-full w-full max-w-[1480px] overflow-hidden rounded-lg bg-skin-fill p-4">
              {children}
            </div>
          </ThemesProvider>
        </div>
      </body>
    </html>
  )
}
