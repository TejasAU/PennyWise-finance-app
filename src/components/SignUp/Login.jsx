import { useContext } from "react"
import { AppContext } from "../../App"
import { Button } from "@material-tailwind/react"

export function Login() {
    const { setIsAuth } = useContext(AppContext)

    return(
        <main className="bg-rich-black text-off-white h-full">
            This is a login page
            <Button 
                variant="outlined"
                onClick={ () => setIsAuth(true)}
                className="text-off-white border border-emerald"
            >
                Go to Home Page
            </Button>
        </main>
    )
}
// export default Login;