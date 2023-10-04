import { Card } from "@material-tailwind/react"
import { Metric } from "@tremor/react"
import { useState } from "react"
import { AddBudget } from "./AddBudget"
import { UserBudgets } from "./UserBudgets"

export function Budgets() {
    const [budgetData, setBudgetData] = useState([
        {},{},{}
    ])
    
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div className="grid grid-cols-6 grid-rows-[repeat(5,7rem)] gap-10 m-20">
                <Card 
                    className="col-span-2 row-span-2 text-xl p-4 text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 2,349</Metric>
                        <div>Total Budgeted</div>
                    </div>  
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                     <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 1,548</Metric>
                        <div>Total Spent</div>
                    </div>
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-5 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <Metric className="font-main">&#8377; 801</Metric>
                        <div>Total Remaining</div>
                    </div>
                </Card>
                <Card 
                    className="col-span-3 row-span-3 row-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    <AddBudget />
                </Card>
                <Card 
                    className="col-span-3 row-span-3 col-start-4 row-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    <UserBudgets />
                </Card>
            </div>
        </main>
    )
}