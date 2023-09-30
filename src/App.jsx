import { createContext, useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'

export const AppContext = createContext()

function App() {
  const [isMounted, setIsMounted] = useState(true)

  return (
    <AppContext.Provider value = { {isMounted, setIsMounted}}>
      <div className='flex h-full w-full'>
        {isMounted && <Sidebar />}
        <div className='flex flex-col h-full w-full'>
          <Header />
          <Main />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
