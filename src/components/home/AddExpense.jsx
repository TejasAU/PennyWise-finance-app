import { Button, Input, Select, Option, Radio, Typography } from "@material-tailwind/react"
import { Alert } from "@material-tailwind/react"
import { useState } from "react"
import { GiWallet as Expense } from 'react-icons/gi'
/* For form input validation */
import * as yup from 'yup'
import { useForm } from "react-hook-form"
/* Integrating schema with useForm hook */
import { yupResolver } from "@hookform/resolvers/yup"

export function AddExpense() {
    const [ showAlert, setShowAlert ] = useState(false)
    
    const schema = yup.object().shape({
        amount: yup.number("Please enter a number").positive("Amount should be positive")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form className="flex flex-col gap-8 mt-8 w-full">
            <div className="flex justify-center items-center gap-8">
                <div className="basis-1/6">
                    <Select 
                        label="Select Version" 
                        className="w-full"
                        color="green"
                    >
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                </div>
                <div className="basis-1/6">
                    <Select label="Select Version" className="w-full" color="green">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                    </Select>
                </div>
                <div className="basis-1/6">
                    <Input label="Amount" className="w-full"/>
                </div>
            </div>
            <div className="grow-1 flex items-center justify-center">
                <Button 
                    className="p-4 border border-emerald hover:bg-emerald hover:text-off-white
                    font-main font-semibold text-emerald"
                >
                    Add Expense
                </Button>
            </div>
        </form> 
    )
}