import React from 'react';
import CountUp from 'react-countup';
import shield from '../../assets/shield.svg'
import { stats } from '../../constants';
import { motion } from 'framer-motion';

const Stats = ({ scrollref }) => {
    return (
        <section className='bg-secondary text-center py-10 px-2' >
            <motion.div viewport={{ root: false }}>
                <div className='font-poppins' >
                <motion.div className='w-full flex justify-center py-3' initial={{y: '20vh', opacity: 0}} transition={{duration: 0.5}}
                        whileInView={{ y: 0, opacity: 1 }}>
                    <img src={shield} alt='shield' />
                </motion.div>
                <motion.h2 className='text-gradient text-[25px] md:text-[30px] font-[800]'
                        initial={{ y: '20vh', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
                    Safe and Trusted
                </motion.h2>
                <motion.p initial={{ y: '20vh'}} whileInView={{ y: 0}} transition={{ duration: 1.01 }} >
                    Peoples profiles is trusted by hundreds of people, worldwide.
                </motion.p>
            </div>

            <div className='flex justify-between py-[88px]'>
                {stats.map((stat) => (
                    <div key={stat.id} className='flex flex-col w-1/2'>
                        <h1 className='text_shine text-gradient font-poppins text-[30px] md:text-[50px] font-[800]'>
                            <CountUp delay={1} duration={8} end={stat.value} />
                        </h1>
                        <h6 className=' font-poppins'>{stat.title}</h6>
                    </div>
                ))}
            </div>
            </motion.div>
        </section>
    )
}

export default Stats