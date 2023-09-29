import { Card } from "@material-tailwind/react"

export function Sidebar(props) {
    return(
        <Card 
            className={`h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 
            shadow-xl shadow-blue-gray-900/5 bg-emerald fixed top-0 left-0 -z-101
            ${props.isOpen ? "left-0" : "-left-80"}
            `}
        >
            
        </Card>
    )
}