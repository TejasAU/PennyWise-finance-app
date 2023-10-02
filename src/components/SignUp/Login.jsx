import { useContext } from "react"
import { AppContext } from "../../App"
// import { Button } from "@material-tailwind/react"
import { Card,Input,Checkbox,Button,Typography, } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export function Login() {
    const { setIsAuth, setIsNewUser } = useContext(AppContext)
    const navigate = useNavigate()


    function handleLogin() {
      setIsAuth(true)
      navigate("/")
    }

    return(
        <main className="bg-rich-black text-off-white h-full flex items-center justify-center">
            
            
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="green" className="flex items-center justify-center">
        Welcome Back!!
      </Typography>
      <Typography color="green" className="mt-1 font-normal flex items-center justify-center">
        Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" color = "white" label="Name" />
          {/* <Input size="lg" label="Email" /> */}
          <Input type="password" color = "white" size="lg" label="Password" />
        </div>
        
        <Button className="mt-6" fullWidth onClick={ () =>  handleLogin()}>
          Login
        </Button >
        <Typography color="gray" className="mt-4 text-center font-normal">
          Make a new account?{" "}
          <Button className="mt-6" fullWidth onClick={ () => setIsNewUser(true)}>
            <Typography color="green">Sign Up</Typography>
          </Button >
        </Typography>
      </form>
    </Card>
        </main>
    )
}
// export default Login;