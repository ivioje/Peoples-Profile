import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../../context/AuthenticationContext'
import DashboardNav from './navbar/Navbar'

const Dashboard = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
            {/* {isLoggedIn && <DashboardNav />
            } */}
            <DashboardNav />
        </>
    )
}

export default Dashboard