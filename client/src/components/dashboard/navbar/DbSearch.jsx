import React from 'react';
import { BsSearch } from 'react-icons/bs';
import searchIcon from '../../../assets/db-search.svg'

const DbSearch = () => {
  return (
    <div className='cursor-pointer '>
      {/*on click it should open the search component*/}
      {/* <img src={searchIcon} alt='' className='sm:hidden flex' /> */}
      <div className='flex items-center bg-slate-300 p-1 w-[170px]'>
        <span className='mx-1'>
          <BsSearch />
        </span>
        <input type='search' name='search' placeholder='Search' className='bg-slate-300 w-[130px] mx-1 placeholder:text-primary outline-none' />
      </div>
      {/* <span className='sm:hidden flex text-primary text-[18px] mt-1'>
        <BsSearch />
      </span> */}
    </div>

  )
}

export default DbSearch