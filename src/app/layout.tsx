import type { Metadata } from 'next'
import './styles/reset.scss'
import './styles/global.scss'

export const metadata: Metadata = {
  title: 'Karvi Challenge',
  description: 'Karvi Challenge, generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        {children}
      </body>
    </html>
  )
}