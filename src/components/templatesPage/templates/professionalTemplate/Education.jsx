import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { TemplateContext } from '../../../../context/TemplateContext'
import styles from '../../../../style'

const Education = ({
    formData,
    handleAddField,
    handleInputChange,
    handleRemoveField }) => {

    const { isPresent, setIsPresent } = useContext(TemplateContext);

    return (
        <>
            <section className={` h-full w-full sm:p-4 p-0`}>
                {formData.map((data, index) => (
                    <div key={index} className='shadow-md p-3 mt-3 border'>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-sm">Education #{index + 1}</h2>
                            <div className='flex items-center justify-center p-1'>
                                {formData.length <= 2 && (
                                    <Button
                                        type="button"
                                        variant=''
                                        onClick={() => handleAddField("education")}
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
                                        onClick={() => handleRemoveField("education", index)}
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
                                    <label htmlFor='jobTitle'>INSTITUTION NAME</label>
                                    <input
                                        name='institution'
                                        id={`institution${index}`}
                                        placeholder='e.g Benson Idahosa University'
                                        type='text'
                                        value={data.institution}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='course'>FIELD OF STUDY</label>
                                    <input
                                        name='course'
                                        id={`course${index}`}
                                        placeholder='e.g computer science'
                                        type='text'
                                        value={data.course}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                            </div>

                            <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='qualification'>QUALIFICATION</label>
                                    <input
                                        name='qualification'
                                        id={`qualification${index}`}
                                        placeholder='e.g B.Sc'
                                        type='text'
                                        value={data.qualification}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='honours'>HONOURS</label>
                                    <input
                                        name='honours'
                                        id={`honours${index}`}
                                        placeholder='e.g first class'
                                        type='text'
                                        value={data.honours}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                            </div>

                            <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                                <div className='xs:w-1/2 w-full'>
                                    <label htmlFor='startDate'>START DATE</label>

                                    <input
                                        name='startDate'
                                        id={`startDate${index}`}
                                        placeholder='Year'
                                        type='date'
                                        value={data.startDate}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                                <div className={`xs:w-1/2 w-full ${isPresent ? 'hidden' : 'flex '}`}>
                                    <label htmlFor='endDate'>END DATE</label>
                                    <input
                                        name='endDate'
                                        id={`endDate${index}`}
                                        placeholder='Year'
                                        type={isPresent ? 'text' : 'date'}
                                        value={isPresent ? data.endDate = 'Present' : data.endDate}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </div>
                                <div className={`xs:w-1/2 w-full mt-6 ${isPresent ? 'flex' : 'hidden'}`}>
                                    <h1 className='p-2 bg-lightGray w-[80px] text-sm rounded-md'>Present</h1>
                                </div>
                            </div>

                            <div className={`flex xs:items-end xs:justify-end items-start justify-start w-full`}>
                                <label htmlFor='check' className='text-[14px] text-blue-900 mx-1 flex' >
                                    I currently study here
                                    <input
                                        id={`item${index}`}
                                        type='checkbox'
                                        className='mx-1 border h-[20px] w-[20px]'
                                        name='check'
                                        value={data.check}
                                        onClick={(e) => setIsPresent(e.target.checked)}
                                        onChange={(event) => handleInputChange("education", index, event)}
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Education