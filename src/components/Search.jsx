import React, { useContext } from 'react';
import { Context } from '../context/GlobalContext';

const Search = ({ query, setQuery }) => {
    return (
        <div className='flex justify-center' >
            <div className='sm:w-[480px] w-[90vw] xs:w-[70vw] sm:px-2 px-[10px] my-5'>
                <input name='search' type='search' placeholder='Search here...'
                    className='h-[47px] w-full  px-4 bg-lightGray rounded-[14px]'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search