import React, { useContext } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import EducationFilter from './educationFilter';
import GenderFilter from './genderFilter';
import JobFilter from './jobFilter';
import OrganizationFilter from './OrganizationFilter';
import { ProfileContext } from '../../context/ProfileContext';
import styles from '../../styles/style';
import Search from '../common/Search';

const Header = () => {

    const { handleFilterClick, handleToggleEduView, handleToggleGenderView, handleToggleOrgView, handleToggleWorkView,
        query, setQuery } = useContext(ProfileContext);

    return (
        <section className={`${styles.flexBtw} flex-col p-4 xs:p-8 font-firaSans`}>
            <h2 className='text-primary text-[25px] uppercase font-[600]'>
                search for profiles
            </h2>
            <Search query={query} setQuery={setQuery} />
            <div className={`${styles.flexCenter} flex-wrap sm:p-3 font-[500] mb-2`}>
                <button onClick={() => handleFilterClick(null)} className='border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]'>
                    All
                </button>
                <button className={`${styles.flexBtw} border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]`}
                    onClick={handleToggleOrgView} >
                    Organization <BsArrowDown />
                </button>
                <button className={`${styles.flexBtw} border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]`}
                    onClick={handleToggleWorkView} >
                    Work <BsArrowDown />
                </button>
                <button className={`${styles.flexBtw} border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]`}
                    onClick={handleToggleEduView} >
                    Education <BsArrowDown />
                </button>
                <button className={`${styles.flexBtw} border p-2 m-1 sm:m-4  sm:text-[16px] text-[14px]`}
                    onClick={handleToggleGenderView}>
                    Gender <BsArrowDown />
                </button>
            </div>

            <OrganizationFilter />
            <JobFilter />
            <EducationFilter />
            <GenderFilter />

            <p className='font-normal font-poppins mt-3'>
                <Link to='/login' className=' border-b-2 border-dotted border-gray-500 text-gradient'>
                    Log in</Link> to save favourites.
            </p>
        </section>
    )
}

export default Header