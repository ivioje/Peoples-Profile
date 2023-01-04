import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import { filterButtons } from '../../constants'
import styles from '../../style'
import EducationFilter from './educationFilter'
import GenderFilter from './genderFilter'
import JobFilter from './jobFilter'
import OrganizationFilter from './OrganizationFilter'

const Header = () => {
    return (
        <section className={`${styles.flexBtw} flex-col p-4 xs:p-8 font-firaSans`}>
            <h2 className='text-primary text-[25px] uppercase font-[600]'>
                search for profiles
            </h2>
            <Search />
            <div className={`${styles.flexCenter} flex-wrap sm:p-3 font-[500] mb-2`}>
                {filterButtons.slice(0, 10).map((item) => (
                    <button key={item.id} className={`${styles.flexBtw} border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]`}>
                        {item.name} <BsArrowDown />
                    </button>
                ))}
            </div>
            {/* <OrganizationFilter /> */}
            {/* <JobFilter /> */}
            {/* <EducationFilter /> */}
            <GenderFilter />

            <p className='font-normal font-poppins'>
                <Link to='/login' className=' border-b-2 border-dotted border-gray-500 text-gradient'>
                    Log in</Link> to save favourites.
            </p>
        </section>
    )
}

export default Header