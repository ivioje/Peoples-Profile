import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/Home'
import Profiles from './routes/profiles/Profiles'
import Navbar from './components/navbar/Navbar'
import Templates from './routes/templates/Templates'
import Guide from './routes/guide/Guide'
import ErrorPage from './components/ErrorPage'
import Login from './routes/login/Login'
import SignUp from './routes/sign-up/SignUp'
import SuccessPage from './routes/SuccessPage'
import DashboardNav from './components/dashboard/navbar/Navbar'
import Overview from './routes/dashboard/overview'
import UploadedProfiles from './routes/dashboard/uploads'
import SavedProfiles from './routes/dashboard/saved'
import Bookmarks from './routes/dashboard/bookmarked'
import Sharedprofiles from './routes/dashboard/shared'
import Trash from './routes/dashboard/trash';

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
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'uploads',
        element: <UploadedProfiles />
      },
      {
        path: 'saved',
        element: <SavedProfiles />
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />
      },
      {
        path: 'shared',
        element: <Sharedprofiles />
      },
      {
        path: 'trash',
        element: <Trash />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
