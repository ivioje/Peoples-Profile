import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/Home'
import Profiles from './routes/profiles/Profiles'
import Navbar from './components/navbar/Navbar'
import Templates from './routes/templates/Templates'
import Guide from './routes/guide/Guide'
import ErrorPage from './ErrorPage'
import Login from './routes/login/Login'
import SignUp from './routes/sign-up/SignUp'
import SuccessPage from './routes/SuccessPage'
import DashboardNav from './components/dashboard/navbar/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profiles',
        element: <Profiles />
      },
      {
        path: '/templates',
        element: <Templates />
      },
      {
        path: '/guide',
        element: <Guide />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/success',
        element: <SuccessPage />
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardNav />,
    children: [
      {
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
