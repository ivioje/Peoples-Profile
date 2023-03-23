import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { TemplateContext } from '../../context/TemplateContext';
import image from '../../assets/emptyBookmarksPage.svg';
import styles from '../../style';
import { Link } from 'react-router-dom';

const BookmarkedTemplates = () => {

    const { bookmark, removeFromBookmarks } = useContext(TemplateContext);

    return (
        <div className='font-poppins mt-3 sm:px-1'>
            <div className={`${styles.flexCenter} flex-wrap`}>
                {bookmark.length ? bookmark.map(item => (
                    <div key={item.id} className={`m-3 xs:w-[44%] sm:w-[250px] w-full h-[140px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer py-4 px-2 relative`}
                        style={{ 'background': `linear-gradient(180deg, ${item.color} 0%, rgba(0, 0, 0, 0.85) 100%) ` }}>
                        <div className={` ${styles.flexBtw} w-full font-firaSans text-text_color text-[11px]`}>
                            <h4 className=' rounded-sm bg-lightGray py-[1px] px-2'>
                                Template
                            </h4>
                            <h4 className='cursor-pointer rounded-2xl bg-lightGray py-[5px] px-2'>
                                open
                            </h4>
                        </div>
                        <div className={` rounded-[15px]`}>
                            <h1 className='h-fit mt-2 '>
                                {item.type} {' Template'}
                            </h1>
                        </div>

                        <button className='absolute bottom-[10px] right-[5px] cursor-pointer text-[20px]' onClick={() => removeFromBookmarks(item.id)}>
                            <BsTrash />
                        </button>
                    </div>
                )) :
                    <div className={`${styles.flexCenter} flex-col sm:w-[70vw] w-full mt-6`}>
                        <h2 className='font-semibold'>You do not have any bookmarks.
                            {' '}<Link to='/templates' className='text-slate-500'>Bookmark</Link> {' '}
                            some templates and check back!</h2>
                        <div className='mb-5 mt-10'>
                            <img src={image} alt='bookmark a template' />
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default BookmarkedTemplates