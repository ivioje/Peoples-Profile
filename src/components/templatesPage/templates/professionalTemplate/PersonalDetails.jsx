import React, { useContext } from 'react';
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';

const PersonalDetails = () => {
  const { selectedFile, handleFileChange } = useContext(TemplateContext)
  return (
    <section className={`sm:${styles.flexBtw} ${styles.flexCol} py-4`}>
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

      <div>

      </div>
    </section>
  )
}

export default PersonalDetails