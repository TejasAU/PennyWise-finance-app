import { Button, Input, Select, Option } from "@material-tailwind/react"


export function AddExpense() {
    return(
        <div className="flex items-center justify-evenly gap-8">
            <div className="text-off-white bg-navy-blue font-display
            flex items-center justify-center">
                Add A New Expense
            </div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-4">
                    <Select variant="outlined" label="SelectVersion">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
                        <Button>Add Expense</Button>
                </div>
            </form> 
        </div> 
    )
}