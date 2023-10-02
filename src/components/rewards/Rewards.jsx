import { Card } from "@material-tailwind/react"
import { FeaturedRew } from "./FeaturedRew"
import { PointRewards } from "./PointRewards"
import { StreakRewards } from "./StreakRewards"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
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
      <TabsBody className='h-full border-b border-emerald/30 rounded-md' 
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

            
        </main>
    )
}