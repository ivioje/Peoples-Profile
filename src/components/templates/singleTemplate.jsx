import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import styles from '../../style';
import BookmarkTemplate from './BookmarkTemplate';

const SingleTemplate = ({ item }) => {

    const { bookmark, setBookmark } = useContext(Context);

    const addToBookmarks = () => {
        // Check if the template is already in the bookmarked list
        if (bookmark.find((mark) => mark.id === item.id)) {
            return;
        }
        // Otherwise, add the template to the bookmarked list
        setBookmark([...bookmark, item]);
    }

    const isInBookmarks = bookmark.some((mark) => mark.id === item.id);



    return (
        <div key={item.id} className='xs:w-[49%] p-2 md:p-0 md:w-[30%] w-full md:mx-2 my-6 border-b'>
            <h1 style={{ 'background': `${item.color}` }} className='text-lightGray text-[20px] font-[600] p-1 '>
                {item.type} {' '} Template
            </h1>
            <p className='font-poppins  px-1 py-4'>Sit faucibus molestie diam quis ultricies.
                Nunc ultricies eu justo, in egestas id auctor proin dui.
            </p>
            <div className={`${styles.flexBtw} p-1`}>
                <button style={{ 'color': `${item.color}`, 'borderColor': `${item.color}` }} className='font-[500] p-1 border opacity-80
                    hover:opacity-100 hover:transition-opacity'>
                    <Link to={`/${item.type.toLowerCase()}`}>Use Template</Link>
                </button>
                <BookmarkTemplate addToBookmarks={addToBookmarks} isInBookmarks={isInBookmarks} />
            </div>
            <hr className='opacity-5' />
        </div>
    )
}

export default SingleTemplate