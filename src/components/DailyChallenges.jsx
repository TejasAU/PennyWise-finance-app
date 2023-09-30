import { 
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip 
} from "@material-tailwind/react";
import { Italic } from "@tremor/react";
import { GiAbstract020 as ChallengeIcon } from "react-icons/gi" 

export function DailyChallenges() {
    return(
        <List className="my-5">
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                This is your daily challenge 1
                <ListItemSuffix>
                    <Chip value='+110' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                This is your daily challenge 2
                <ListItemSuffix>
                    <Chip value='+250' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="hover:bg-gray-800 hover:text-emerald text-off-white">
                <ListItemPrefix>
                    <ChallengeIcon />
                </ListItemPrefix>
                This is your daily challenge 3
                <ListItemSuffix>
                    <Chip value='+50' variant="gradient" color="amber" className="rounded-full"></Chip>
                </ListItemSuffix>
            </ListItem>
            <ListItem className="text-dark-green font-semibold" >
                <Italic>Complete all of these challenges to earn a special reward!</Italic>
            </ListItem>
        </List>
    )
}