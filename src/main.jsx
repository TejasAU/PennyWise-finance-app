import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Main } from './components/home/Main.jsx'
import './index.css'


import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Budgets } from './components/budgets/Budgets.jsx'
import { ProfileDetails } from './components/profile/ProfileDetails.jsx'
import { Rewards } from './components/rewards/Rewards.jsx'
import { Analytics } from './components/analytics/Analytics.jsx'
import { AllChallenges } from './components/challenges/AllChallenges.jsx'
import { EditProfile } from './components/editP/EditProfile.jsx'

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
      },
      {
        path: "/editP",
        element: <EditProfile />
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>,
)
