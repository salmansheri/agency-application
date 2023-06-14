import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/providers/AuthProvider'; 
import getCurrentUser from '@/actions/getCurrentUser'
import { User } from '@prisma/client'

const font = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400",'500', '600', '700', '800', '900' ] })

export const metadata = {
  title: 'Agency Service',
  description: 'This is an Agency Service website for freelancers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser: User | null = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>

        <ThemeProvider>

        <div className="container min-h-screen my-0 mx-auto py-0 px-16 flex flex-col justify-between">
          
        

        <Navbar currentUser={currentUser} />
        {children}
        <Footer />
        </div>
        </ThemeProvider>
        </AuthProvider>
         
        </body>
    </html>
  )
}
