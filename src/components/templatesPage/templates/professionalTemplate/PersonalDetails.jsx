import React, { useContext, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';
import LinkButtons from './Linkbuttons';
import './styles.css';

const PersonalDetails = ({ formData, handleInputChange }) => {
  const { selectedFile, handleFileChange } = useContext(TemplateContext);


  return (
    <section className={`flex justify-between sm:flex-row flex-col sm:p-4 p-0`}>
      <div className='sm:w-[20%] mt-[20px] sm:mb-0 mb-6 w-full h-full flex justify-center py-3'>
        <div className='w-[134px] h-[134px]'>
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded photo"
              className='w-full h-full rounded-sm'
            />
          ) : (
            <img src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" alt="Placeholder image" className='border' />
          )}
          <label htmlFor="Upload photo" className='text-[12px]'>
            Upload photo
            <input
              type="file"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png"
              className='text-[12px] text-blue-900 w-full'
            />
          </label>
        </div>
      </div>

      <div className='sm:w-[75%] h-full w-full sm:p-2'>
        {formData.map((data, index) => (
          <form key={index} className={`flex flex-col justify-between`}>
            <div className={`${styles.flexBtw} xs:flex-row flex-col mt-6`}>
              <div className='xs:w-1/2 w-full'>
                <label htmlFor='firstname'> FIRST NAME </label>
                <input
                  name='firstname'
                  placeholder='e.g Jon'
                  type='text'
                  value={data.firstname}
                  onChange={(event) => handleInputChange("personalDetails", index, event)}
                  required
                />
              </div>
              <div className='xs:w-1/2 w-full'>
                <label htmlFor='lastname'>
                  LAST NAME
                </label>
                <input
                  name='lastname'
                  placeholder='e.g Doe'
                  type='text'
                  value={data.lastname}
                  onChange={(event) => handleInputChange("personalDetails", index, event)}
                />
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='occupation'>
                JOB TITLE
              </label>
              <input
                name='occupation'
                placeholder='e.g front-end developer'
                type='text'
                value={data.occupation}
                onChange={(event) => handleInputChange("personalDetails", index, event)}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='address'>
                STREET ADDRESS
              </label>
              <input
                name='address'
                placeholder='e.g 200 Richard .K. Jonah crescent'
                type='text'
                value={data.address}
                onChange={(event) => handleInputChange("personalDetails", index, event)}
              />
            </div>
            <div className={`${styles.flexBtw} sm:flex-row flex-col`}>
              <div className='sm:w-[40%] w-full'>
                <label htmlFor='city'>
                  CITY/TOWN
                </label>
                <input
                  name='city'
                  placeholder='e.g Abuja'
                  type='text'
                  value={data.city}
                  onChange={(event) => handleInputChange("personalDetails", index, event)}
                />
              </div>
              <div className='flex xs:flex-row flex-col sm:w-[60%] w-full'>
                <div className='xs:w-1/2 w-full'>
                  <label htmlFor='country'>
                    COUNTRY
                  </label>
                  <input
                    name='country'
                    placeholder='e.g Nigeria'
                    type='text'
                    value={data.country}
                    onChange={(event) => handleInputChange("personalDetails", index, event)}
                  />
                </div>
                <div className='xs:w-1/2 w-full'>
                  <label htmlFor='zipcode'>
                    ZIP CODE
                  </label>
                  <input
                    name='zipcode'
                    placeholder='e.g 900001'
                    type='text'
                    value={data.zipcode}
                    onChange={(event) => handleInputChange("personalDetails", index, event)}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.flexBtw} xs:flex-row flex-col`}>
              <div className='xs:w-1/2 w-full'>
                <label htmlFor='phone'>
                  PHONE
                </label>
                <input
                  name='phone'
                  placeholder='phone number'
                  type='number'
                  value={data.phone}
                  onChange={(event) => handleInputChange("personalDetails", index, event)}
                />
              </div>
              <div className='xs:w-1/2 w-full'>
                <label htmlFor='email'>
                  EMAIL ADDRESS
                </label>
                <input
                  name='email'
                  placeholder='email address'
                  type='email'
                  value={data.email}
                  onChange={(event) => handleInputChange("personalDetails", index, event)}
                />
              </div>
            </div>
          </form>
        ))}
        <div className='sm:w-[80%] w-full my-2'>
          <div className='flex items-center cursor-pointer relative'>
            <h3 className='text-blue-900 text-[14px] font-extrabold'>
              Additional information to your professional profile
              <span className='font-normal'>
                {' '}(optional)
              </span>
            </h3>
            <span className='ml-2 hoverable text-blue-900'><BsInfoCircleFill /></span>
            <span className='hover-content absolute h-auto rounded-xl w-auto bg-dimWhite p-3 right-0 top-[-50px] shadow-lg transition-all font-semibold text-[13px]'>
              Add links to your website or social media handles.
            </span>
          </div>
          <LinkButtons />
        </div>
      </div>
    </section>
  )
}

export default PersonalDetails