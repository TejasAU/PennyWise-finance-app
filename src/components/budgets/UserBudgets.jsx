import { Text, ProgressBar } from '@tremor/react'
import { Card } from '@material-tailwind/react'

export function UserBudgets(props) {
    return(
        <div className="flex flex-col justify-center items-center gap-4">
                Your Budgets
                <br />
                {props.budgetData.map( ({category, desc, amount, color}) => (
                    <>
                    <div className=" w-4/5 flex justify-between font-normal text-lg font-main text-off-white mt-4">
                        <div>{category} &bull; {desc}</div>
                        <div>&#8377; {amount}</div>
                    </div>
                    <ProgressBar value={45} color={color} className="mt-3 w-4/5" showAnimation={true} />  
                    </>
                    )
                )} 
        </div>
    )
}