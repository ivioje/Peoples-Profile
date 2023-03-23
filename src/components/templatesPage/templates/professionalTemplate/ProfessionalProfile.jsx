import React from 'react'
import styles from '../../../../style'
import WorkExperience from './WorkExperience'

const ProfessionalProfile = () => {
  return (
    <section className={` ${styles.flexCenter} flex-col `}>
      <div className='sm:w-4/5 w-[95%] bg-gray-100 my-10'>
        <h1>Professional Portfolio Template</h1>
        <WorkExperience />
      </div>
    </section>
  )
}

export default ProfessionalProfile