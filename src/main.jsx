import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/home/Home'
import Profiles from './routes/profiles/Profiles'
import Templates from './routes/templatesPage/Templates'
import Guide from './routes/guide/Guide'
import ErrorPage from './components/ErrorPage'
import SuccessPage from './routes/SuccessPage'
import DashboardNav from './components/dashboard/navbar/Navbar'
import Overview from './routes/dashboard/overview'
import UploadedProfiles from './routes/dashboard/uploads'
import SavedProfiles from './routes/dashboard/saved'
import Bookmarks from './routes/dashboard/bookmarked'
import Sharedprofiles from './routes/dashboard/shared'
import Trash from './routes/dashboard/trash';
import ProfileDetails from './components/profiles/profileDetails';
import { ContextProvider } from './context/GlobalContext';
import ProfessionalProfile from './components/templatesPage/templates/professionalTemplate/ProfessionalProfile';
import FinishedTemplate from './components/templatesPage/templates/professionalTemplate/FinishedTemplate';
import SignUp from './components/auth/sign-up/SignUp';
import Login from './components/auth/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      {
        path: '/profiles/user/:id',
        element: <ProfileDetails />
      },
      {
        path: '/templates/professional-portfolio-template',
        element: <ProfessionalProfile />
      },
      {
        path: '/templates/professional-portfolio-template/finished-template',
        element: <FinishedTemplate />
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
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)
