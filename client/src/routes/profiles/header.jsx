import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { filterButtons } from '../../constants'

const Header = () => {
    return (
        <section className='flex flex-col items-center justify-between p-8 font-firaSans'>
            <h2 className='text-primary text-[25px] uppercase font-[600]'>
                search for profiles
            </h2>
            <div className='sm:w-[480px] w-full sm:px-2 px-[20px] my-5'>
                <input name='search' type='text' placeholder='Search here...'
                    className='h-[47px] w-full text-text_color px-4 bg-lightGray rounded-[14px]'
                />
            </div>
            <div className='flex items-center p-3 font-[500]'>
                {filterButtons.map((item) => (
                    <button key={item.id} className='border flex items-center justify-between p-2 m-4 text-text_color'>
                       {item.name} <BsArrowDown />
                    </button>
                ))}

            </div>

            <p className='text-primary font-normal font-poppins'>
                <Link to='/login' className='underline'>Log in</Link> to save favourites.
            </p>
        </section>
    )
}

export default Header