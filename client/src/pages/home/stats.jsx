import React from 'react';
import CountUp from 'react-countup';
import shield from '../../assets/shield.svg'
import { stats } from '../../constants';

const Stats = () => {
    return (
        <section className='bg-secondary text-center py-10 px-2'>
            <div data-aos='fade-up' data-aos-duration='2000'
            className='font-poppins'>
                <div className='w-full flex justify-center py-3'>
                    <img src={shield} alt='shield' />
                </div>
                <h2 className='text-gradient text-[25px] md:text-[30px] font-[800]'>Safe and Trusted</h2>
                <p className='text-text_color'>Peoples profiles is trusted by hundreds of people, worldwide.</p>
            </div>

            <div className='flex justify-between py-[88px]'>
                {stats.map((stat) => (
                    <div key={stat.id} className='flex flex-col w-1/2'>
                        <h1 data-aos='fade-down' data-aos-duration='1000'
                         className='text_shine text-gradient font-poppins text-[30px] md:text-[50px] font-[800]'>
                            <CountUp delay={1} duration={8} end={stat.value} />
                        </h1>
                        <h6 className='text-text_color font-poppins'>{stat.title}</h6>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats