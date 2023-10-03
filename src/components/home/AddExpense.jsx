import { Button, Input, Select, Option, Radio } from "@material-tailwind/react"
import { Alert } from "@material-tailwind/react"
import { useState } from "react"
import { GiWallet as Expense } from 'react-icons/gi'

export function AddExpense() {
    const [ showAlert, setShowAlert ] = useState(false)
    
    return(
        <div className="flex items-center justify-evenly gap-8">
            <div className="text-off-white bg-navy-blue font-display
            flex items-center justify-center">
                <Alert
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    className="flex flex-row w-[30vw] fixed top-[3.8rem] right-[16rem] bg-emerald/70"
                >
                    <div className="text-off-white">Expense Added!</div>
                </Alert>
                Add A New Expense
            </div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-4">
                <Select 
                    variant="static" 
                    label="Type" 
                    color="white"
                    className="text-emerald"
                    menuProps={{
                        className: 'bg-navy-blue text-emerald'
                    }}
                    labelProps={{
                        className: 'text-emerald'
                    }}
                >
                        <Option className="hover:bg-dark-green hover:text-off-white
                            focus:bg-dark-green focus:text-off-white text-[0.9rem]
                            font-main font-normal"
                        >
                            Income
                        </Option>
                        <Option className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white text-[0.9rem] 
                            font-main font-normal"
                        >
                            Expense
                        </Option>
                    </Select>
                    <Select variant="static" label="Category" color="white"
                        className="text-emerald"
                        menuProps={{
                            className: 'bg-navy-blue border-r-0 text-emerald max-h-[100px]'
                        }}
                        labelProps={{
                            className: 'text-emerald'
                        }}
                        >
                        <Option className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white text-[0.9rem] 
                            font-main font-normal"
                        >
                            Food
                        </Option>
                        <Option className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white text-[0.9rem] 
                            font-main font-normal"
                        >
                            Transport
                        </Option>
                        <Option className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white text-[0.9rem] 
                            font-main font-normal"
                        >
                            Entertainment
                        </Option>
                        <Option className="hover:bg-dark-green hover:text-off-white 
                            focus:bg-dark-green focus:text-off-white text-[0.9rem] 
                            font-main font-normal"
                        >
                            Miscelleonus
                        </Option>
                    </Select>
                    <Input label="Amount" color="white"
                        labelProps = {{
                            className: 'text-emerald'
                        }}
                        containerProps={{
                            className: 'text-emerald'
                        }}
                        className="w-full"
                    />
                    <div className="flex items-center justify-center">
                        <Button className="border-2 border-emerald text-emerald p-4
                        font-main font-extrabold"
                        onClick={ () => setShowAlert(true)}
                        >
                            Add Expense
                        </Button>
                    </div>
                </div>
            </form> 
        </div> 
    )
}