import { 
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip 
} from "@material-tailwind/react";

import { GiAbstract020 as ChallengeIcon } from "react-icons/gi" 

export function FeaturedRew(){
    return(
        <div>
            <List className="mt-4 font-display">
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white focus:bg-dark-green focus:text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Complete Daily Challenges!!
                <ListItemSuffix>
                    <Chip value='+points' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white focus:bg-dark-green focus:text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Hit Your Daily and Monthly Targets!
                <ListItemSuffix>
                    <Chip value='+points' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white focus:bg-dark-green focus:text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Buy Exciting Rewards Using Collected Points!
                <ListItemSuffix>
                    <Chip value='+rewards' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white focus:bg-dark-green focus:text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                Maintain Streaks To Get Additional Rewards!
                <ListItemSuffix>
                    <Chip value='+Bonus Rewards' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            
        </List>
        </div>
    )
}