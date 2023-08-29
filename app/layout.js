import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import './globals.css'
import { StoreProvider } from '@/utils/Store'

export const metadata = {
  title: 'Cafiend',
  description: 'Website Coffee'
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en" className='overflow-x-hidden'>
        <body className='text-cf-black bg-cf-milk text-lg font-inconsolata font-normal leading-normal'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  )
}
