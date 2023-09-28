import { FiBell as Bell } from 'react-icons/fi'
import { FiSearch as Search } from 'react-icons/fi'
import { FiMenu as Menu } from 'react-icons/fi'
import { IconContext } from 'react-icons'


function App() {
  return (
    <IconContext.Provider value={{ size: '1.2rem' }}>
      <header 
        className="text-off-white h-12 bg-rich-black flex justify-around items-center"
      >
        <button>
          <Menu />
        </button>
        <nav className='flex gap-3'>
          <button className=''><Bell /></button>
          <button><Search /></button>
        </nav>
      </header>
    </IconContext.Provider>
  )
}

export default App
