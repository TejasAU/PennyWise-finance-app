import { useContext } from "react"
import { AppContext } from "../../App"
// import { Button } from "@material-tailwind/react"
import { Card,Input,Checkbox,Button,Typography, } from "@material-tailwind/react";



export function Login() {
    const { setIsAuth } = useContext(AppContext)

    return(
        <main className="bg-rich-black text-off-white h-full flex items-center justify-center">
            
            {/* <Button 
                variant="outlined"
                onClick={ () => setIsAuth(true)}
                className="text-off-white border border-emerald"
            >
                Go to Home Page
            </Button> */}
            <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="green">
        Welcome Back!!
      </Typography>
      <Typography color="green" className="mt-1 font-normal">
        Enter your details to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          {/* <Input size="lg" label="Email" /> */}
          <Input type="password" size="lg" label="Password" />
        </div>
        {/* <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        /> */}
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Make a new account?{" "}
          <a href="#" className="font-medium text-emerald-50">
            <Typography color="green">Sign Up</Typography>
          </a>
        </Typography>
      </form>
    </Card>
        </main>
    )
}
// export default Login;