import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { BsPlus } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa'
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';
import TextEditor from './TextEditor';

const WorkExperience = ({
    formData,
    handleAddField,
    handleInputChange,
    handleRemoveField }) => {

    const { handleCheckboxChange, workDescription, setWorkDescription } = useContext(TemplateContext);

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

                                <div className={`flex xs:items-end xs:justify-end items-start justify-start w-full`}>

                                    <div className={`xs:w-1/2 w-full ${data.isPresent ? 'hidden' : 'flex '}`}>
                                        <label htmlFor='endDate'>END DATE</label>
                                        <input
                                            name='endDate'
                                            placeholder='end date'
                                            type={data.isPresent ? 'text' : 'date'}
                                            value={data.isPresent ? data.endDate = 'Present' : data.endDate}
                                            onChange={(event) => handleInputChange("workExperience", index, event)}
                                        />
                                    </div>

                                    <label htmlFor={`item${index}`} className='text-[14px] text-blue-900 mx-1 flex'>
                                        I currently work here
                                        <input
                                            id={`item${index}`}
                                            type='checkbox'
                                            className='mx-1 border h-[20px] w-[20px]'
                                            name='check'
                                            checked={data.isPresent}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </label>
                                </div>
                            </div>

                        </form>
                        <div className='md:w-1/2 sm:w-[80%] w-full'>
                            <label className='text-[14px] text-blue-900 mb-3'>DESCRIPTION</label>
                            <TextEditor
                                id={`desc${index}`}
                                value={workDescription}
                                setValue={(e) => setWorkDescription(e)}
                                className=''
                            />
                        </div>

                    </div>
                ))}
            </section>
        </>
    )
}

export default WorkExperience