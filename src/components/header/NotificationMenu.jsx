import { FiBell as Bell } from 'react-icons/fi'

import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { Badge, IconButton, Typography } from '@material-tailwind/react'

export function NotificationMenu() {
    return (
        <Menu
            animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}
            placement='bottom-end'
        >
            <Badge color='light-green' overlap='circular'>
                <MenuHandler>
                    <IconButton 
                        size='sm'
                        ripple={true} 
                        variant='text' 
                        className='rounded-full hover:bg-gray-800 text-off-white'
                    >
                        <Bell />
                    </IconButton>
                </MenuHandler>
            </Badge>
            <MenuList className='flex flex-col gap-2'>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <Typography variant="small" color="gray" className="font-normal">
                            <span className="font-medium text-blue-gray-900">Your daily challenges
                            have been reset</span>
                        </Typography>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-gray-600"
                        >   
                            Make sure to complete them
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <Typography variant="small" color="gray" className="font-normal">
                            <div className="font-medium text-blue-gray-900">Your monthly budget for 
                            'Food' has reached 90% </div>
                        </Typography>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-gray-600"
                        >
                            Save now
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                    <div className="flex flex-col gap-1">
                        <Typography variant="small" color="gray" className="font-normal">
                            <span className="font-medium text-blue-gray-900">Redeem rewards with
                            the coins you've earned!</span>
                        </Typography>
                        <Typography
                            variant="small"
                            className="flex items-center gap-1 text-xs text-gray-600"
                        >
                            Explore our offerings
                        </Typography>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}