import React, { useContext } from 'react';
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';

const PersonalDetails = () => {
  const { selectedFile, handleFileChange } = useContext(TemplateContext)
  return (
    <section className={`sm:${styles.flexBtw} py-4`}>
      <div className='w-[126px] h-[134px]'>
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Food Item" />
        ) : (
          <img src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" alt="Placeholder Food Item" />
        )}
        <label htmlFor="Upload photo" className='text-[12px]'>
          Upload photo
          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
            className='text-[12px] text-blue-900'
          />
        </label>
      </div>

      <div className='mt-10'>
        <form className={`flex flex-col`}>
          <div className={`${styles.flexBtw} p-2`}>
            <label htmlFor='firstname'>
              FIRST NAME
              <input name='firstname' placeholder='e.g Jon' type='text' />
            </label>
            <label htmlFor='lastname'>
              LAST NAME
              <input name='lastname' placeholder='e.g Doe' type='text' />
            </label>
          </div>
          <label htmlFor='address'>
            STREET ADDRESS
            <input name='address' placeholder='e.g 200 Richard .K. Jonah crescent' type='text' />
          </label>
          <div>
            <label htmlFor='city'>
              CITY/TOWN
              <input name='city' placeholder='e.g Abuja' type='text' />
            </label>
            <div>
              <label htmlFor='country'>
                COUNTRY
                <input name='country' placeholder='e.g Nigeria' type='text' />
              </label>
              <label htmlFor='zipcode'>
                ZIP CODE
                <input name='zipcode' placeholder='e.g 900001' type='text' />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor='phone'>
              PHONE
              <input name='phone' placeholder='phone number' type='number' />
            </label>
            <label htmlFor='email'>
              EMAIL ADDRESS
              <input name='email' placeholder='email address' type='email' />
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PersonalDetails