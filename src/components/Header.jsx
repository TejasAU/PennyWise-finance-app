import { FiSearch as Search } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import { IconButton } from '@material-tailwind/react'
import { NotificationMenu } from './NotificationMenu'
import { SidebarHandler } from './SidebarHandler'

export function Header() {
    return (
        <IconContext.Provider value={{ size: '1.3rem' }}>
            <header 
                className="text-off-white h-14 bg-rich-black px-6
                flex justify-between items-center"
            >
                <SidebarHandler />
                <nav className='flex gap-3'>
                    <NotificationMenu />
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