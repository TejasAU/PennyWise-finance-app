import { Card } from "@material-tailwind/react"

import { ExpensesChart } from "./ExpensesChart";
import { DailyChallenges } from "./DailyChallenges";
import { TransactionList } from "./TransactionList";
import { AddExpense } from "./AddExpense";

export function Main() {
    
    return(
        <main className= "bg-rich-black h-[120vh]">
            
            <div className="grid grid-cols-1 grid-flow-row grid-rows-[repeat(7,10rem)] 
                xl:grid-cols-3 xl:grid-rows-[repeat(7,6rem)] gap-8 m-20"
            >    
            
                <Card 
                    className="text-xl text-off-white p-4 
                    bg-gradient-to-r from-dark-green to-navy-blue 
                    xl:row-span-2 overflow-scroll lg"
                >
                    Welcome, John!<br />Let's take a gander at your expenses!   
                </Card>
                <Card
                    className="text-xl p-4 text-off-white  bg-navy-blue
                    xl:col-start-2 xl:col-span-2 xl:row-span-2 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Add a Transaction
                    <AddExpense />
                </Card> 
                <Card 
                    className="text-xl p-4 text-off-white  bg-navy-blue
                    xl:row-span-3 xl:row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Daily Expenses
                    <ExpensesChart />
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:row-span-2 xl:col-span-2 xl:row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    Recent Transactions
                    <TransactionList />
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:row-span-2 xl:col-start-1 xl:row-start-6 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >
                    <div>Know My City</div>
                    <div>Your location is: Pune</div>
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    xl:col-span-2 xl:row-span-3 xl:col-start-2 xl:row-start-5 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green font-display overflow-scroll"
                >   
                    Daily Challenges
                    <DailyChallenges />
                </Card>
               
            </div>
        </main>
    )
}   