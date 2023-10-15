import './globals.css'
import { Inter } from 'next/font/google'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import SessionProvider from './SessionProvider'
import Login from './login'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <Home/>          
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
