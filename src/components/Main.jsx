import { Card } from "@material-tailwind/react";
import { Card as TremorCard, Title, DonutChart, Legend } from "@tremor/react";
const budgetData = [
    {
        category: 'Food',
        value: 300,
    },
    {
        category: 'Transport',
        value: 220,
    },
    {
        category: 'Entertainment',
        value: 150,
    },
];

const valueFormatter = (number) => `Rs. ${number}`

/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/


export function Main() {
    return(
        <main className= "bg-rich-black">
            <div className="grid grid-cols-3 grid-rows-[repeat(7,5rem)] gap-8 m-20">    
                <Card 
                    className="text-xl text-off-white p-4 
                    bg-gradient-to-r from-dark-green to-navy-blue 
                    row-span-2 col-span-3"
                >
                    Welcome, John!<br />Let's take a gander at your expenses!
                </Card>
                <Card 
                    className="text-xl p-4 text-off-white  bg-navy-blue
                    row-span-3 row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Daily Expenses
                    <div className="flex flex-col items-center justify-center">
                        <DonutChart
                            className="mt-6"
                            data={budgetData}
                            category="value"
                            index="category"
                            // TODO generate random color array
                            colors={["purple","red","cyan"]}
                            valueFormatter={valueFormatter}
                        />
                        <Legend
                            className="mt-3 m"
                            // TODO get dynamically from data
                            categories={["Food","Transport","Entertainment"]}
                            // TODO generate random color array
                            colors={["purple","red","cyan"]}
                        />
                    </div>
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    row-span-2 col-span-2 row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Daily Challenges
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    row-span-2 col-start-1 row-start-6 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Know My City
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    col-span-2 row-span-3 col-start-2 row-start-5 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Recent Transactions
                </Card>
            </div>
        </main>
    )
}