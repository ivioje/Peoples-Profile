import React, { useContext } from 'react';
import { TemplateContext } from '../../../../context/TemplateContext';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa'
import { BsMailbox } from 'react-icons/bs';
import styles from '../../../../style';
import './styles.css';
import ColorPicker from './ColorPalete';

const FinishedTemplate = () => {
    const { selectedColor, setSelectedColor, summaryContent, personalDetails, workDescription, workExperience, skillContent, education } = useContext(TemplateContext);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    }

    return (
        <div className={``}>
            <div className={`xs:m-6 m-1 bg-stone-200 shadow`}>
                <div className={`${styles.flexCenter} mt-5`}>
                    <h4 className='text-[12px]'>Change background color:</h4>
                    <ColorPicker
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        handleColorSelect={handleColorSelect}
                    />
                </div>
                <section className={`${styles.flexAround} sm:flex-row flex-col p-3 w-full xs:h-full aspect-square font-domine text-text_color`}>
                    <div className={`p-5 sm:w-[30%] text-[14px] w-full sm:h-full ${styles.flexStart} flex-col flex-wrap text-dimWhite text-opacity-90`}
                        style={{ 'backgroundColor': selectedColor }}>
                        <div className=' mt-6'>
                            <img src='http://' className='h-full w-full' />
                        </div>
                        {personalDetails.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className={`xs:text-[27px] flex sm:hidden text-[25px] uppercase w-full font-[700] mb-1 py-4 border border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400`}>
                                    <h1>{`${data.firstname} ${data.lastname}`}</h1>
                                </div>
                                <div className={`mt-6 w-full flex flex-col contact_items`}>
                                    <h1 className='border border-t-0 border-l-0 border-r-0 mt-6 font-bold'>
                                        CONTACT
                                    </h1>
                                    <div className={`flex items-start justify-start h-auto my-2`}>
                                        <span className='h-full'><FaLocationArrow /></span>
                                        <h2 className='h-full'>{`${data.address}, ${data.city}, ${data.country}`}</h2>
                                    </div>
                                    <div className='my-2'>
                                        <span><FaPhone /></span>
                                        <h2>{data.phone}</h2>
                                    </div>
                                    <div className='my-2 h-auto flex flex-wrap w-inherit'>
                                        <span><FaMailBulk /></span>
                                        <h2>{data.email}</h2>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        <div className={`w-full `}>
                            <h1 className={`border border-t-0 border-l-0 border-r-0 mt-6 font-bold`}>
                                SKILLS
                            </h1>
                            <div dangerouslySetInnerHTML={{ __html: skillContent }} />
                        </div>
                        <div className={`w-full`}>
                            <h2 className={`border border-t-0 border-l-0 border-r-0 mt-6 font-bold`}>
                                LINKS
                            </h2>
                        </div>
                    </div>

                    <div className={`sm:w-[70%] w-full sm:h-full flex justify-start items-start flex-col tmp_content px-3 bg-white`}>
                        <div className={`xs:text-[30px] hidden sm:flex text-[25px] w-full font-[700] mb-1 py-4 border border-t-0 border-l-0 border-r-0 border-b-2 border-[#3f3f3f]`}
                            style={{ 'color': selectedColor }}>
                            {personalDetails.map((data, index) => (
                                <h1 key={index}>{`${data.firstname} ${data.lastname}`}</h1>
                            ))}
                        </div>
                        <div className={`my-8 w-full`}>
                            <h1>Professionl summary</h1>
                            <p dangerouslySetInnerHTML={{ __html: summaryContent }} />
                        </div>
                        <div className={`my-4 border border-b-0 border-l-0 border-r-0 border-t-2 w-full`}>
                            <h1>WORK HISTORY</h1>
                            {workExperience.map((data, index) => (
                                <div key={index}>
                                    <div className={`${styles.flexBtw} mt-3 py-1`}>
                                        <h3 className='font-bold'>{data.jobTitle}</h3>
                                        <p className='text-[13px] text-gray-500'>{`${data.startDate} - ${data.endDate}`}</p>
                                    </div>
                                    <h3 className='font-bold'>{data.organization} - <span className='font-normal'>{`${data.city}, ${data.country}`}</span></h3>
                                    <div className='my-4' dangerouslySetInnerHTML={{ __html: workDescription }} />
                                </div>
                            ))}
                        </div>
                        <div className={`my-4 border border-b-0 border-l-0 border-r-0 border-t-2 w-full`}>
                            <h1>EDUCATION</h1>
                            <div>content</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FinishedTemplate