import React from 'react';
import bookmarkIcon from '../../../assets/bookmark.svg'
import BookmarkedTemplates from '../../../components/dashboard/BookmarkedTemplates';
import DashboardHeaders from '../../../components/dashboard/DashboardHeaders';

const Bookmarks = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]'>
      <DashboardHeaders
        title={' Your Bookmarked Templates'}
        subtitle={'All your bookmarked templates in one place!'}
        icon={bookmarkIcon}
      />

      <BookmarkedTemplates />
    </section>
  )
}

export default Bookmarks