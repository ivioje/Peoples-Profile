import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    const loggedIn = () => {
        setIsloggedIn(true);
    }


    const loggedOut = () => {
        setIsloggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ loggedIn, isLoggedIn, setIsloggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}