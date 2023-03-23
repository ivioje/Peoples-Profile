import React, { useContext, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { TemplateContext } from '../../../context/TemplateContext';
import styles from '../../../style';

const CreateProfile = ({ setOpenTemplatesList }) => {
    const [close, setClose] = useState(null);


    const { templateData } = useContext(TemplateContext);
    return (
        <div className={`flex justify-center flex-col absolute sm:top-[55px] top-[35px] w-[270px] overflow-y-scroll p-1 sm:left-[-350px] xs:left-[-45vw] left-[-250px] bg-white shadow-2xl font-poppins text-[15px]`}>
            <div className='text-center mb-4'>
                <div className={`${styles.flexBtw}`}>
                    <h1 className='p-1 font-firaSans text-[16px]'>Choose a Template</h1>
                    <BsX className={`text-[20px] sm:hidden cursor-pointer `} />
                </div>
                <hr />
                <p className='text-[13px]'>Choose a template below in order to create a profile.</p>
            </div>
            <div className={`h-[300px]`}>
                {templateData.map((data) => (
                    <Link to={`/templates/${data.id}`} key={data.id} className={`${styles.flexCenter} border-b-[1px] hover:bg-slate-300 p-1`}>
                        <div className={`w-[40px] h-[40px] ${styles.flexCenter}`}>
                            <img src={data.thumbnail} alt={data.type} className='rounded-sm' />
                        </div>
                        <h3 className='w-full ml-3'>{data.type} {' '} Template</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CreateProfile