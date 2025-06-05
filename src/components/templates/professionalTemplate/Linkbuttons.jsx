import React, { useContext, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { TemplateContext } from '../../../context/TemplateContext';
import styles from '../../../style';

const LinkButtons = () => {
    const { activeButton, showButtonContent, inputValues, setInputValues } = useContext(TemplateContext);

    const [saved, setSaved] = useState(false);
    const [edited, setEdited] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
        }));
        setEdited((prevEdited) => ({
            ...prevEdited,
            [name]: true,
        }));
        setSaved((prevSaved) => ({
            ...prevSaved,
            [name]: false,
        }));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // Save the input values to local storage
    //     localStorage.setItem('inputValues', JSON.stringify(inputValues));
    // };

    // const handleSave = (name) => {
    //     setSaved((prevSaved) => ({
    //         ...prevSaved,
    //         [name]: !prevSaved[name],
    //     }));
    //     setEdited((prevEdited) => ({
    //         ...prevEdited,
    //         [name]: false,
    //     }));
    // }

    //links array
    const items = [
        { title: 'LinkedIn', id: 1 },
        { title: 'Website', id: 2 },
        { title: 'Twitter', id: 3 },
        { title: 'Facebook', id: 4 },
        { title: 'GitHub', id: 5 },
    ];

    return (
        <>
            <div className={`${styles.flexBtw} flex-wrap my-3`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.flexBtw} cursor-pointer m-2 rounded-2xl p-1 border border-blue-900 ${activeButton === item.id ? 'bg-[#171F3A] opacity-90 text-dimWhite transition-all' : 'text-blue-900'
                            }`}
                        onClick={() => showButtonContent(item.id)}
                    >
                        <span className='text-[20px]'>
                            <BsPlusCircle />
                        </span>
                        <button className='p-[2px]'>{item.title}</button>
                    </div>
                ))}
            </div>

            <div className='shadow-xl p-3 w-full'>
                {items.map((item) => (
                    <div key={item.id}>
                        {activeButton === item.id && (
                            <div>
                                <form className='flex flex-col items-start justify-start'>
                                    <label>{item.title} URL</label>
                                    <input
                                        type='url'
                                        name={item.title}
                                        placeholder={`Enter ${item.title} URL`}
                                        className='h-[41px] w-full'
                                        value={inputValues[item.title] || ''}
                                        onChange={handleInputChange}
                                    // disabled={saved[item.id]}
                                    />

                                    {/* <button
                                        type='submit'
                                        className='bg-[#171F3A] opacity-90 text-dimWhite px-2 py-1 rounded-lg'
                                        onClick={() => handleSave(item.id)}
                                     disabled={saved[item.id]}
                                    > */}
                                    {/* {edited[item.title] || saved[item.title] ? 'Saved' : 'Save'} */}
                                    {/* {edited[item.title] ? 'Save' : 'Saved' && saved[item.id] ? 'Saved' : 'Save'}
                                    </button> */}
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default LinkButtons;
