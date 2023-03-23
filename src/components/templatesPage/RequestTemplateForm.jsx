import React, { useContext } from 'react';
import styles from '../../style';

const RequestTemplateForm = () => {

    return (
        <form className={`${styles.flexCol} pt-8 pb-[40px] requestForm w-full sm:w-[600px]`}>
            <input name='name' type='text' placeholder='Template name' />
            <textarea name='description' rows='3' cols='21' type='text' placeholder='Template description' />
            <input name='email' type='email' placeholder='Email address' />
            <button name='submit' type='submit' className='request-btn text-dimWhite text-[18px] primary-gradient w-[200px] font-[500] '>
                Request Template
            </button>
        </form>
    )
}

export default RequestTemplateForm