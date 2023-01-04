import React from 'react'

const Search = () => {
    return (
        <div className='flex justify-center' >
            <div className='sm:w-[480px] w-[90vw] xs:w-[70vw] sm:px-2 px-[10px] my-5'>
                <input name='search' type='text' placeholder='Search here...'
                    className='h-[47px] w-full text-text_color px-4 bg-lightGray rounded-[14px]'
                />
            </div>
        </div>
    )
}

export default Search