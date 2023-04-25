import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { BsPlus } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';

const WorkExperience = ({
    formData,
    handleAddField,
    handleInputChange,
    handleRemoveField }) => {

    const { isPresent, setIsPresent, workDescription, handleQuillChange } = useContext(TemplateContext)

    return (
        <>
            <section className={` h-full w-full sm:p-4 p-0`}>
                {formData.map((data, index) => (
                    <div key={index} className='shadow-md p-3 mt-3 border'>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-sm">Work Experience #{index + 1}</h2>
                            <div className='flex items-center justify-center p-1'>
                                {formData.length <= 3 && (
                                    <Button
                                        type="button"
                                        variant=''
                                        onClick={() => handleAddField("workExperience")}
                                        style={{ 'background': 'rgb(230, 230, 230)', 'fontSize': '14px', 'textTransform': 'capitalize', 'margin': '4px' }}
                                    >
                                        Add {' '} <BsPlus />
                                    </Button>
                                )}
                                {formData.length !== 1 && (
                                    <Button
                                        type="button"
                                        variant=''
                                        className={`${styles.flexCenter} p-1 rounded-lg m-1`}
                                        onClick={() => handleRemoveField("workExperience", index)}
                                        style={{ 'background': 'rgb(230, 230, 230)', 'margin': '4px' }}
                                    >
                                        <FaMinus />
                                    </Button>
                                )}
                            </div>
                        </div>
                        <form className={` ${styles.flexCenter} flex-col p-2`}>

                            <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='jobTitle'> JOB TITLE </label>
                                    <input
                                        name='jobTitle'
                                        id={`jobTitle${index}`}
                                        placeholder='e.g Developer'
                                        type='text'
                                        value={data.jobTitle}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='organization'>ORGANIZATION</label>
                                    <input
                                        name='organization'
                                        id={`organization${index}`}
                                        placeholder='e.g Google'
                                        type='text'
                                        value={data.organization}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                            </div>

                            <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='city'>CITY</label>
                                    <input
                                        name='city'
                                        id={`city${index}`}
                                        placeholder='e.g Abuja'
                                        type='text'
                                        value={data.city}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='country'>COUNTRY</label>
                                    <input
                                        name='country'
                                        id={`country${index}`}
                                        placeholder='e.g Nigeria'
                                        type='text'
                                        value={data.country}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                            </div>

                            <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='startDate'>START DATE</label>
                                    <input
                                        name='startDate'
                                        id={`startDate${index}`}
                                        placeholder='start date'
                                        type='date'
                                        value={data.startDate}
                                        className=''
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                                <div className={`xs:w-1/2 w-full ${isPresent ? 'hidden' : 'flex '}`}>
                                    <label htmlFor='endDate'>END DATE</label>
                                    <input
                                        name='endDate'
                                        id={`endDate${index}`}
                                        placeholder='end date'
                                        type={isPresent ? 'text' : 'date'}
                                        value={isPresent ? data.endDate = 'Present' : data.endDate = data.endDate}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </div>
                                <div className={`xs:w-1/2 w-full mt-6 ${isPresent ? 'flex' : 'hidden'}`}>
                                    <h1 className='p-2 bg-lightGray w-[80px] rounded-md'>Present</h1>
                                </div>
                            </div>

                            <div className={`flex xs:items-end xs:justify-end items-start justify-start w-full`}>
                                <label htmlFor='check' className='text-[14px] text-blue-900 mx-1 flex' >
                                    I currently work here
                                    <input
                                        id={`item${index}`}
                                        type='checkbox'
                                        className='mx-1 border h-[20px] w-[20px]'
                                        name='check'
                                        value={data.check}
                                        onClick={(e) => setIsPresent(e.target.checked)}
                                        onChange={(event) => handleInputChange("workExperience", index, event)}
                                    />
                                </label>
                            </div>
                        </form>
                        <div className='md:w-1/2 sm:w-[80%] w-full'>
                            <label className='text-[14px] text-blue-900 mb-3'>DESCRIPTION</label>
                            <ReactQuill
                                id={`desc${index}`}
                                theme="snow"
                            // value={workDescription.description}
                            // onChange={(value) => handleQuillChange(index, value)}
                            />
                        </div>

                    </div>
                ))}
            </section>
        </>
    )
}

export default WorkExperience