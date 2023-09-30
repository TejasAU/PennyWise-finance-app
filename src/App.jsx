import { createContext, useState } from 'react'
import { Header } from './components/navbar/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const AppContext = createContext()

function App() {
  const [isMounted, setIsMounted] = useState(true)

  return (
      <AppContext.Provider value = { {isMounted, setIsMounted}}>  
        <div className='flex h-full w-full'>
          {isMounted && <Sidebar />}
          <div className='flex flex-col h-full w-full'>
            <Header />
            <Outlet />
          </div>
        </div>
      </AppContext.Provider>
  )
}

export default App
