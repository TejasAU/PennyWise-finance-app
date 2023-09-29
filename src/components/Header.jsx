import { FiBell as Bell } from 'react-icons/fi'
import { FiSearch as Search } from 'react-icons/fi'
import { FiMenu as Menu } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import { IconButton } from '@material-tailwind/react'

export function Header() {
    return (
        <IconContext.Provider value={{ size: '1.3rem' }}>
            <header 
                className="text-off-white h-14 bg-rich-black 
                flex justify-around items-center"
            >
                <IconButton 
                size='sm'
                ripple={true} 
                variant='text' 
                className='rounded-full hover:bg-gray-800 text-off-white'
                >
                <Menu />
                </IconButton>
                <nav className='flex gap-3'>
                    <IconButton 
                        size='sm'
                        ripple={true} 
                        variant='text' 
                        className='rounded-full hover:bg-gray-800 text-off-white'
                    >
                        <Bell />
                    </IconButton>
                    <IconButton 
                        size='sm'
                        ripple={true} 
                        variant='text' 
                        className='rounded-full hover:bg-gray-800 text-off-white'
                    >
                        <Search />
                    </IconButton>
                </nav>
            </header>
        </IconContext.Provider>
    )
}