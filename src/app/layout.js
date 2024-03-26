
import './globals.css'
import { Play } from 'next/font/google'

const play = Play({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



export const metadata = {
  title: 'Julio Santana',
  description: 'Developer',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  )
}
