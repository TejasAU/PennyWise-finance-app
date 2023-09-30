import { Card } from "@material-tailwind/react";

export function Main() {
    return(
        <main className= "bg-rich-black">
            <div className="grid grid-cols-3 grid-rows-[repeat(7,5rem)] gap-8 m-20">    
                <Card 
                    className="text-xl text-off-white p-4 
                    bg-gradient-to-r from-dark-green to-navy-blue 
                    row-span-2 col-span-3"
                >
                    Welcome, John!<br />Let's take a gander at your expenses!
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    row-span-3 row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Daily Budget Progress
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    row-span-2 col-span-2 row-start-3 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Daily Challenges
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    row-span-2 col-start-1 row-start-6 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Know My City
                </Card>
                <Card 
                    className="text-xl text-off-white p-4 bg-navy-blue
                    col-span-2 row-span-3 col-start-2 row-start-5 transition-shadow duration-300
                    hover:shadow-[4px_3px_2px_1px] hover:shadow-dark-green"
                >
                    Recent Transactions
                </Card>
            </div>
        </main>
    )
}