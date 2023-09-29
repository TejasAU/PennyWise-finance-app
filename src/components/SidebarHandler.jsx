import { FiMenu as Menu } from 'react-icons/fi'
import { IconButton } from '@material-tailwind/react'

export function SidebarHandler() {
    return (
        <IconButton 
            size='sm'
            ripple={true} 
            variant='text' 
            className='rounded-full hover:bg-gray-800 text-off-white'
            >
            <Menu />
        </IconButton>
    )
}