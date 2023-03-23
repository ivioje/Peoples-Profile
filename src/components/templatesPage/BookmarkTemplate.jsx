import React from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import styles from '../../style'

const BookmarkTemplate = ({ addToBookmarks, isInBookmarks }) => {
    return (
        <div onClick={addToBookmarks}>
            {
                isInBookmarks ?
                    <button className={` ${styles.flexCenter} rounded-full text-primary bg-lightGray w-[40px] h-[40px]`} title='bookmarked'>
                        <BsBookmarkFill />
                    </button>
                    :
                    <button className={` ${styles.flexCenter} rounded-full text-primary bg-lightGray w-[40px] h-[40px]`} title='bookmark'>
                        <BsBookmark />
                    </button>
            }

        </div>
    )
}

export default BookmarkTemplate