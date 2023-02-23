import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import CountUp from 'react-countup';
import shield from '../../assets/shield.svg'
import { stats } from '../../constants';

const Stats = () => {
    const scrollRef = useRef(null);
    return (
        <section className='bg-secondary text-center py-10 px-2'>
            
            <div className='font-poppins' ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition= {{ delay: 0.5 }}>
                <div className='w-full flex justify-center py-3'>
                    <img src={shield} alt='shield' />
                </div>
                <h2 className='text-gradient text-[25px] md:text-[30px] font-[800]'>Safe and Trusted</h2>
                <p className=''>Peoples profiles is trusted by hundreds of people, worldwide.</p>
                </motion.div>
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
        </section>
    )
}

export default Stats