import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react"
import { useContext } from "react"
import { AppContext } from "../App"
import { FiTag as Tag, FiHome as Home } from 'react-icons/fi' 
import { TbCategory as Category, TbDeviceDesktopAnalytics as Analytics } from 'react-icons/tb'
import { BsListTask as Challenge } from 'react-icons/bs'

export function Sidebar() {
    
    const { isMounted } = useContext(AppContext)
    
    return(
            <Card 
                className={`h-[calc(100vh)] w-full max-w-[20rem] p-1    
                shadow-xl shadow-blue-gray-900/5 bg-rich-black 
                ease-in-out duration-200 text-lg text-emerald 
                rounded-none`}
            >
                <div className="mb-2 p-4 text-xl">
                    PennyWise
                </div>
                <List className="text-emerald">
                    <ListItem 
                        className="hover:bg-dark-green hover:text-off-white 
                        focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                    >
                        <ListItemPrefix>
                            <Home />
                        </ListItemPrefix>
                        Home
                    </ListItem>
                    <ListItem 
                        className="hover:bg-dark-green hover:text-off-white 
                        focus:bg-dark-green focus:text-off-white h-14 mb-2"  
                    >
                        <ListItemPrefix>
                            <Category />
                        </ListItemPrefix>
                        Budgets and Categories
                    </ListItem>
                    <ListItem 
                        className="hover:bg-dark-green hover:text-off-white 
                        focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                    >
                        <ListItemPrefix>
                            <Challenge />
                        </ListItemPrefix>
                        Challenges
                    </ListItem>
                    <ListItem 
                        className="hover:bg-dark-green hover:text-off-white 
                        focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                    >
                        <ListItemPrefix>
                            <Analytics />
                        </ListItemPrefix>
                        Analytics
                    </ListItem>
                    <ListItem 
                        className="hover:bg-dark-green hover:text-off-white 
                        focus:bg-dark-green focus:text-off-white h-14 mb-2" 
                    >
                        <ListItemPrefix>
                            <Tag />
                        </ListItemPrefix>
                        Rewards
                    </ListItem>
                </List>
            </Card>
    )
}