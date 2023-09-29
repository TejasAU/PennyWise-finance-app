import { Card } from "@material-tailwind/react";

export function Main() {
    return(
        <main className="py-6 bg-rich-black h-screen
        flex grow justify-center items-center">
            <Card className="text-xl text-off-white p-4 
            bg-gradient-to-r
            from-dark-green to-navy-blue">
                Welcome, John!<br />Let's take a gander at your expenses!
            </Card>
        </main>
    )
}