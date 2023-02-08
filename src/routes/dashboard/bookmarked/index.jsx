import React from 'react';
import bookmarkIcon from '../../../assets/bookmark.svg'
import BookmarkedTemplates from './BookmarkedTemplates';

const Bookmarks = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <div className=' sm:mt-10 mt-1 xs:p-3 w-full font-montserrat'>
        <div className='flex items-center '>
          <img src={bookmarkIcon} alt="icon" />
          <p className='mx-1'>
            Your Bookmarked Templates
          </p>
        </div>
        <hr />
        <p className='my-2 opacity-70'>
          All your bookmarked templates in one place!
        </p>
      </div>

      <BookmarkedTemplates />
    </section>
  )
}

export default Bookmarks