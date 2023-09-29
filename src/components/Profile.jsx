import { Menu, MenuHandler, Button, Avatar, Typography } from '@material-tailwind/react'
import maleProfile from '../assets/maleProfile.jpeg'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export function Profile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant='text'
                    color="blue-gray"
                    className="flex items-center gap-2 rounded-full py-0.5 pr-2 pl-0.5 w-34 mx-6
                    text-off-white text-[11 px]"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        className="border border-gray-900 p-0.5"
                        src={maleProfile}
                    />
                    Hi, John!
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
        </Menu>
    )
}