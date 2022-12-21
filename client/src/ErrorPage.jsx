import React from 'react'
import { Link, useRouteError } from "react-router-dom";
import styles from './style';


export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className={`${styles.flexCenter} flex-col h-[100vh] text-center`}>
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p className='text-[25px] font-bold'>Sorry, an unexpected error has occurred.<br /> Return
                <Link to='/' className="text-gradient border-b-2 border-dotted border-gray-500 m-2 ">
                    {' '}  Home
                </Link>
            </p>
        </div>
    );
}