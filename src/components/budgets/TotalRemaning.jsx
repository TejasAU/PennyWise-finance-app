import { Metric } from "@tremor/react"

export function TotalRemaining() {
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <Metric className="font-main">&#8377; 801</Metric>
            <div>Total Remaining</div>
        </div>
    )
}