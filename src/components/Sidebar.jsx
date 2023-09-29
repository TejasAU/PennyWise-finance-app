import { Card, Typography } from "@material-tailwind/react"

export function Sidebar(props) {
    return(
        <Card 
            className='h-[calc(100vh)] w-full max-w-[20rem] p-4 
            shadow-xl shadow-blue-gray-900/5 bg-emerald'
        >
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
        </Card>
    )
}