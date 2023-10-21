import { useContext } from "react"
import { AppContext } from "../../App"
// import { Button } from "@material-tailwind/react"
import { Card, Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import EarthCanvas from "./Earth";


export function Login() {
  const { setIsAuth, setIsNewUser } = useContext(AppContext)
  const navigate = useNavigate()


  function handleLogin() {
    setIsAuth(true)
    navigate("/")
  }

  // const history = useNavigate();

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // async function submit(e) {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3000/", {
  //       email, password
  //     })
  //       .then(res => {
  //         if (res.data == "exist") {
  //           history("/home", { state: { id: email } })
  //         }
  //         else if (res.data == "notexist") {
  //           alert("User have not sign up")
  //         }
  //       })
  //       .catch(e => {
  //         alert("wrong details")
  //         console.log(e);
  //       })
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <main className="bg-transparent  h-[100vh] flex flex-col justify-center">
      <div className="text-off-white h-[75vh] w-auto grid grid-cols-2 items-center justify-center">
        <EarthCanvas />
        <div className="h-[75vh] flex items-center justify-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="green" className="flex text-5xl items-center justify-center">
              Welcome Back!!
            </Typography>
            <Typography color="green" className="mt-1 font-normal text-2xl flex items-center justify-center">
              Enter your details to login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" color="white" onChange={(e) => { setEmail(e.target.value) }} label="Email" />
                {/* <Input size="lg" label="Email" /> */}
                <Input type="password" color="white" size="lg" onChange={(e) => { setPassword(e.target.value) }} label="Password"  />
              </div>

              <Button className="mt-6 text-lg" fullWidth onClick={() => handleLogin()}>
                Login
              </Button >
              {/* <Button className="mt-6 text-lg" fullWidth onClick={submit}>
                Login
              </Button > */}
              <Typography color="gray" className="mt-4 text-center text-xl font-normal">
                Create a new account?{" "}
                <Button className="mt-6" fullWidth onClick={() => setIsNewUser(true)}>
                  <Typography color="green">Sign Up</Typography>
                </Button >
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </main>
  )
}
// export default Login;