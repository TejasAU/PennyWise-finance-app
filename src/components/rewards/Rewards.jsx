import { Card } from "@material-tailwind/react"
import { FeaturedRew } from "./FeaturedRew"
import { PointRewards } from "./PointRewards"
import { StreakRewards } from "./StreakRewards"

export function Rewards() {
    return(
        <main className="bg-rich-black text-off-white h-full">
            Featured Rewards
            <Card>
                <FeaturedRew />
            </Card>
            Point Rewards
            <Card>
                <PointRewards />
            </Card>
            Streak Rewards
            <Card>
                <StreakRewards />
            </Card>
        </main>
    )
}