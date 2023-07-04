import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';
import WorkExperience from '../professionalTemplate/WorkExperience';


const Templatedetails = () => {
  const { id } = useParams();
  const { templateData } = useContext(TemplateContext);

  const templates = templateData.map((item) => item);

  const templateDetails = templates[id];

  if (!templateDetails) {
    return <div>Template not found</div>
  }

  return (
    <div className={` ${styles.flexCenter} `}>
      <WorkExperience />
    </div>
  )
}

export default Templatedetails