import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../../../../assets/wave.svg'
import styles from '../../../../style';
import RequestTemplateForm from '../page-components/RequestTemplateForm';

const RequestTemplate = () => {
    return (
        <section className='bg-cover bg-no-repeat bg-bottom font-firaSans relative '
            style={{ 'backgroundImage': `url(${wave})` }}>
            <div className={`${styles.flexStart} div-overlay px-2 h-full`}>
                <h1 className='md:text-[64px] ss:text-[30px] text-[22px] text-gradient font-[600] pt-[40px] pb-2 '>
                    Request for a template
                </h1>
                <p className='font-poppins text-center w-full md:w-1/2 sm:text-[20px] font-[500] opacity-80 '>
                    Can’t find a template that suits your need? Use our {' '}
                    <Link className='text-gradient border-b-2 border-dotted border-gray-500'>
                        basic template {' '}
                    </Link>
                    or request for a template by filling in the form below. We will review your submission and be in touch with you!
                </p>

                <RequestTemplateForm />
            </div>
        </section>
    )
}

export default RequestTemplate