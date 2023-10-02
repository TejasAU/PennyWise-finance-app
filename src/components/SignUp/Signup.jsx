import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
  
  export function SimpleRegistrationForm() {
    const { setIsAuth, setIsNewUser } = useContext(AppContext)
    const navigate = useNavigate()

    function handleLogin() {
      setIsAuth(true)
      navigate("/home")
    }

    return (
      <main className="bg-rich-black text-off-white h-full flex items-center justify-center">
            
            
            <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="green" className="flex items-center justify-center">
        Welcome !!
      </Typography>
      <Typography color="green" className="mt-1 font-normal flex items-center justify-center">
        Enter your details to signup.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
          <Input type="password" size="lg" label="Enter Password Again" />
        </div>
        
        <Button className="mt-6" fullWidth onClick={ () => handleLogin()}>
        
          Register
        </Button >
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Button className="mt-6" fullWidth onClick={ () => setIsNewUser(false)}>
            <Typography color="green">Log in</Typography>
          </Button>
        </Typography>
      </form>
    </Card>
        </main>
    );
  }