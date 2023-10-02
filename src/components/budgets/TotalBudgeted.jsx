import { Metric } from "@tremor/react"

export function TotalBudgeted() {
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <Metric className="font-main">&#8377; 2,349</Metric>
            <div>Total Budgeted</div>
        </div>
    )
}