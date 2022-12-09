import React, { useState } from 'react';
import CountUp from 'react-countup';
import shield from '../../assets/shield.svg'
import { stats } from '../../constants';

const Stats = () => {
    return (
        <section className='bg-secondary text-center py-10 px-2'>
            <div className='font-poppins'>
                <div className='w-full flex justify-center py-3'>
                    <img src={shield} alt='shield' />
                </div>
                <h2 className='text-gradient text-[25px] md:text-[30px] font-[800]'>Safe and Trusted</h2>
                <p className='text_color'>Peoples profiles is trusted by hundreds of people, worldwide.</p>
            </div>

            <div className='flex justify-between py-[88px]'>
                {stats.map((stat) => (
                    <div key={stat.id} className='flex flex-col w-1/2'>
                        <h1 className='text-gradient font-firaSans text-[30px] md:text-[50px] font-[500]'>
                            <CountUp delay={1} duration={6} end={stat.value} />
                        </h1>
                        <h6 className='text_color font-poppins'>{stat.title}</h6>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats