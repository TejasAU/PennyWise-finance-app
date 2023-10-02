import { Card } from "@material-tailwind/react"
import { TotalBudgeted } from "./TotalBudgeted"
import React from "react"
import { TotalSpent } from "./TotalSpent"
import { TotalRemaining } from "./TotalRemaning"

export function Budgets() {
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div className="grid grid-cols-6 grid-rows-[repeat(5,7rem)] gap-10 m-20">
                <Card 
                    className="col-span-2 row-span-2 text-xl p-4 text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <TotalBudgeted />  
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <TotalSpent />
                </Card>
                <Card 
                    className="col-span-2 row-span-2 col-start-5 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green
                    flex flex-col gap-2 items-center justify-center"
                >
                    <TotalRemaining />
                </Card>
                <Card 
                    className="col-span-3 row-span-3 row-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Add a new Budget
                </Card>
                <Card 
                    className="col-span-3 row-span-3 col-start-4 row-start-3 text-xl p-4 
                    text-off-white bg-navy-blue
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Your Budgets
                </Card>
            </div>
        </main>
    )
}