import { Card } from "@material-tailwind/react"
import { FeaturedRew } from "./FeaturedRew"
import { PointRewards } from "./PointRewards"
import { StreakRewards } from "./StreakRewards"
import { GiLaurelsTrophy as Prize } from "react-icons/gi"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Chip,
  } from "@material-tailwind/react";
  import { List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix } from "@material-tailwind/react"
  import React from "react";
  import { GiBreakingChain as Streak } from "react-icons/gi"
  import { LiaCoinsSolid as Points } from "react-icons/lia"
export function Rewards() {
    const data = [
        {
          label: "Point Rewards",
          value: "html",
          desc: `Complete challenges to earn points.`,
          icon: <Points/> ,
        },
        {
          label: "Streak Rewards",
          value: "react",
          desc: `Complete streaks to get rewards`,
          icon: <Streak /> ,
        },
     
       
      ];
    return(
        <main className="bg-rich-black text-off-white h-full 
        flex flex-col items-center justify-center gap-8">
            Featured Rewards
            <Card className='text-xl text-off-white p-10 bg-navy-blue
                transition-shadow duration-300 w-4/5 
                hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green'>
                <FeaturedRew />
            </Card>
            <Tabs id="custom-animation" value="html" className='h-3/5 w-4/5'>
      <TabsHeader className='bg-transparent h-14' indicatorProps={{
                        className: 'bg-off-white/20'
                    }}  >
        {data.map(({ label, value , icon }, index) => (
          <Tab key={value} value={value}>
            <div className={`flex items-center gap-2 
                            font-main font-semibold 
                            ${index === 0 ? 'text-emerald' :
                            index === 1 ? 'text-yellow-400' :
                            index === 2 ? 'text-red-600' : 'text-off-white'}`}
                        >
                            {icon}
                            {label}
                        </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className='h-full border-b bg-rich-black border-emerald/30 rounded-md ' 
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel className='text-off-white bg-rich-black text-lg font-main font-normal flex flex-col h-screen my-auto items-center' key={value} value={value}>
            {desc}
            <Card className="w-96 overflow-hidden rounded-md bg-rich-black">
      <List className="my-5 font-display ">
        <ListItem className="hover:bg-gray-800 hover:text-emerald 
                                            text-off-white focus:bg-dark-green focus:text-off-white 
                                            h-16">
          <ListItemPrefix>
          <Prize />
          </ListItemPrefix>
          50% off on Dove Face cream
          <ListItemSuffix>
            <Chip
              value="-50"
              variant="ghost"
              size="sm"
              className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
              color="green"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="hover:bg-gray-800 hover:text-emerald 
                                            text-off-white focus:bg-dark-green focus:text-off-white 
                                            h-16">
          <ListItemPrefix>
          <Prize />
          </ListItemPrefix>
          70% off at Starbucks
          <ListItemSuffix>
            <Chip
              value="-50"
              variant="ghost"
              size="sm"
              className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
            />
          </ListItemSuffix>
        </ListItem>
        
        <ListItem className="hover:bg-gray-800 hover:text-emerald 
                                            text-off-white focus:bg-dark-green focus:text-off-white 
                                            h-16">
          <ListItemPrefix>
          <Prize />
          </ListItemPrefix>
          20% off at Apple Showroom
          <ListItemSuffix>
            <Chip
              value="-50"
              variant="ghost"
              size="sm"
              className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
            />
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

            
        </main>
    )
}