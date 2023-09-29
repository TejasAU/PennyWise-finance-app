import { Header } from './components/Header'
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
