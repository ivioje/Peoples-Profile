import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = ({ setToggle }) => (
    <div className='pl-3' onClick={() => setToggle(false)}>
        <Link to='/signup'>
            <button className='w-[157px] h-[42px] bg-dimWhite text-primary rounded-lg font-medium font-poppins'>
                Get Started
            </button>
        </Link>
    </div>
)

export default GetStarted