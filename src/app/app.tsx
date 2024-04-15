'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Image from 'next/image'

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <div className="flex justify-center mt-8 md:mt-0">
          <Image src="/images/logo.png" alt="pokemon logo" width={350} height={350} />
        </div>
        {children}
      </div>
    </QueryClientProvider>
  )
}

export default App
