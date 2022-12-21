import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../../assets/wave.svg'
import styles from '../../style';

const RequestTemplate = () => {
    return (
        <section className='bg-cover bg-no-repeat bg-bottom font-firaSans relative h-[90vh] '
            style={{ 'backgroundImage': `url(${wave})` }}>
            <div className={`${styles.flexStart} div-overlay px-2 absolute h-full`}>
                <h1 className='md:text-[64px] ss:text-[30px] text-[22px] text-gradient font-[600] pt-7 pb-2 '>
                    Request for a template
                </h1>
                <p className='font-poppins text-text_color text-center md:w-1/2 sm:text-[20px] font-[500] opacity-80 '>
                    Can’t find a template that suits your need? Use our {' '}
                    <Link className='text-gradient border-b-2 border-dotted border-gray-500'>
                        basic template {' '}
                    </Link>
                    or request for a template by filling in the form below. We will review your submission and be in touch with you!
                </p>

                <form className={`${styles.flexCol} py-2 requestForm`}>
                    <input name='name' type='text' placeholder='Template name' className='' />
                    <textarea name='description' rows='3' cols='21' type='text' placeholder='Template description' className='' />
                    <input name='email' type='email' placeholder='Email address' className='' />
                    <button type='submit' className='request-btn text-dimWhite text-[18px] primary-gradient w-full mx-2 font-[500] '>
                        Request Template
                    </button>
                </form>
            </div>
        </section>
    )
}

export default RequestTemplate