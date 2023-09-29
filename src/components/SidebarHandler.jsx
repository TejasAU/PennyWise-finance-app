import { FiMenu as Menu } from 'react-icons/fi'
import { IconButton } from '@material-tailwind/react'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function SidebarHandler() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <IconButton 
                size='sm'
                ripple={true} 
                variant='text' 
                className='rounded-full hover:bg-gray-800 text-off-white'
                onClick={() => setIsOpen(!isOpen)}
                >
                <Menu />
            </IconButton>
            <Sidebar isOpen={isOpen} />
        </>   
    )
}