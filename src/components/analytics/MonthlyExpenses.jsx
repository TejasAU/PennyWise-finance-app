import { DonutChart, Flex, Legend } from "@tremor/react";
import { BarList } from '@tremor/react'

/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/

const monthPieData = [
    {
        name: 'Food',
        value: 300,
    },
    {
        name: 'Transport',
        value: 220,
    },
    {
        name: 'Entertainment',
        value: 150,
    },
];

const valueFormatter = (number) => `Rs. ${number}`

/* Use the following colors: pink, purple, indigo, blue, cyan, teal, yellow, lime, green
    amber, orange, red and gray
*/

export function MonthlyExpenses() {
    return(
        <div className="flex gap-8 justify-center items-center basis-2/5">
            <div className="flex flex-col items-center justify-center">
                <DonutChart
                        showAnimation={true}
                        className="mt-6"
                        data={monthPieData}
                        category="value"
                        index="name"
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
            <div className="mx-8 basis-2/5">
                <div className="flex items-center justify-between mt-4">
                    <div className="font-main">Category</div>
                    <div className="font-main">Amount</div>
                </div>
                <BarList 
                    showAnimation={true}
                    data={monthPieData} 
                    className="mt-4 mb-6 font-main font-semibold" 
                    valueFormatter={valueFormatter}
                />
            </div>
        </div>
    )
}