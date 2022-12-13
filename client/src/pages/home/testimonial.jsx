import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import templateImg from '../../assets/templateImg.svg'
import { testimonials } from '../../constants';

const Testimonials = () => {
    return (
        <section className='bg-secondary w-full font-poppins text-text_color py-14'>
            <h1 className='text-center text-gradient text-[25px] md:text-[30px] font-[800] pb-5'>
                See what others are saying
            </h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='flex justify-center items-center'>
                        <div className='p-3 flex justify-center items-center w-full md:w-[70%] flex-col-reverse md:flex-row'>
                            <div className='flex flex-col pl-10 pr-4 md:w-[90vw]'>
                                <p className='text-left text-[14px] md:text-[16px]'>{testimonial.content}</p>
                                <a href='#' className='flex justify-end py-5 font-[700] text-gradient text-[12px] pr-5'>
                                    --{' '}{testimonial.name}
                                </a>
                            </div>
                            <div className='w-[100px] h-[100px] mb-4 md:w-[250px] md:h-[136px] border border-white 
                            rounded-[50%] shadow-xl mx-10 bg-cover bg-center' style={{ 'backgroundImage': `url(${testimonial.photo})` }}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Testimonials