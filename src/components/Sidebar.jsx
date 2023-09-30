import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react"
import { useContext } from "react"
import { AppContext } from "../App"
import { FiTag as Tag, FiHome as Home } from 'react-icons/fi' 
import { TbCategory as Category, TbDeviceDesktopAnalytics as Analytics } from 'react-icons/tb'
import { BsListTask as Challenge } from 'react-icons/bs'
import { Link } from "react-router-dom"

export function Sidebar() {
    
    const { isMounted } = useContext(AppContext)
    
    return(
            <Card 
                className="w-full max-w-[20rem] p-1    
                shadow-sm shadow-off-white bg-navy-blue
                ease-in-out duration-200 text-lg text-emerald 
                rounded-none"
            >
                <div className="mb-2 p-4 text-xl">
                    PennyWise
                </div>
                <List className="text-emerald">
                    <Link to='/home'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2"
                        >
                            <ListItemPrefix>
                                <Home />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                    </Link>
                    <Link to='/budgets'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2"  
                        >
                            <ListItemPrefix>
                                <Category />
                            </ListItemPrefix>
                            Budgets and Categories
                        </ListItem>
                    </Link>
                    <Link to='/challenges'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                        >
                            <ListItemPrefix>
                                <Challenge />
                            </ListItemPrefix>
                            Challenges
                        </ListItem>
                    </Link>
                    <Link to='/analytics'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                        >
                            <ListItemPrefix>
                                <Analytics />
                            </ListItemPrefix>
                            Analytics
                        </ListItem>
                    </Link>
                    <Link to='/rewards'>
                        <ListItem 
                            className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                        >
                            <ListItemPrefix>
                                <Tag />
                            </ListItemPrefix>
                            Rewards
                        </ListItem>
                    </Link>
                </List>
            </Card>
    )
}