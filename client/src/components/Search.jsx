import React from 'react'

const Search = () => {
    return (
        <div className='flex justify-center' >
            <div className='sm:w-[480px] w-full sm:px-2 px-[20px] my-5'>
                <input name='search' type='text' placeholder='Search here...'
                    className='h-[47px] w-full text-text_color px-4 bg-lightGray rounded-[14px]'
                />
            </div>
        </div>
    )
}

export default Search