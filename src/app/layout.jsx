import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'WeDu Home',
  description: 'This is a Tech Media Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="main-container">
          <Navbar />
          {children}
        </div>
        </body>
    </html>
  )
}
