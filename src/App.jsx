import { createContext, useState } from 'react'
import { Header } from './components/navbar/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Login } from './components/SignUp/Login'
import { useOutlet } from 'react-router-dom'
import { Welcome } from './components/Welcome'

export const AppContext = createContext()

function App() {
  const [isMounted, setIsMounted] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const outlet = useOutlet()

  return (
      <AppContext.Provider value = { {isMounted, setIsMounted, isAuth, setIsAuth}}>  
        { isAuth ? ( 
          <div className='flex h-full w-full'>
            {isMounted && <Sidebar />}
            <div className='flex flex-col h-full w-full'>
              <Header />
              {outlet || <Welcome />}
            </div>
          </div> )
          : (
            <Login />
          )
        }
      </AppContext.Provider>
  )
}

export default App
