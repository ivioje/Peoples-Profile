import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../context/Context';


const Templatedetails = () => {
    const { id } = useParams();
    const { templateData } = useContext(Context);
    
    const templates = templateData.map((item) => item);
    
    const templateDetails = templates[id];

    if(!templateDetails) {
        return <div>Template not found</div>
      }

  return (
    <div>
        <h1>{templateDetails.type}</h1>
    </div>
  )
}

export default Templatedetails