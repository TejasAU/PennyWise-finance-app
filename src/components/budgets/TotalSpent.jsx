import { Metric } from "@tremor/react"

export function TotalSpent() {
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <Metric className="font-main">&#8377; 1,548</Metric>
            <div>Total Spent</div>
        </div>
    )
}