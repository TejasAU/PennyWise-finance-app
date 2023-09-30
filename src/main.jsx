import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Main } from './components/Main.jsx'
import './index.css'


import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Budgets } from './components/Budgets.jsx'
import { ProfileDetails } from './components/ProfileDetails.jsx'
import { Rewards } from './components/Rewards.jsx'
import { Analytics } from './components/Analytics.jsx'
import { AllChallenges } from './components/AllChallenges.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/budgets",
        element: <Budgets />,
      },
      {
        path: "/challenges",
        element: <AllChallenges />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
      },
      {
        path: "/profile",
        element: <ProfileDetails />
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>,
)
