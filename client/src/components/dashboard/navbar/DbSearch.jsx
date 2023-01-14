import React from 'react';
import { BsSearch } from 'react-icons/bs';
import searchIcon from '../../../assets/db-search.svg'

const DbSearch = () => {
  return (
    <div className='cursor-pointer '>
        {/*on click it should open the search component*/}
        <img src={searchIcon} alt='' className='sm:flex hidden'/>
        <BsSearch className='sm:hidden text-primary text-[20px] mt-1' />
    </div>

  )
}

export default DbSearch