import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import App from './app'
import { PokemonProvider } from '../contexts/pokeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PokeApi Challenge App',
  description: 'Created by Dhalguin Hernandez (dhalguin.hdz@gmail.com)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen p-1 md:p-5">
          <div className="p-3 rounded-md border-solid border-gray-400 border-2 h-full overflow-y-scroll">
            <PokemonProvider>
              <App>{children}</App>
            </PokemonProvider>
          </div>
        </main>
      </body>
    </html>
  )
}
