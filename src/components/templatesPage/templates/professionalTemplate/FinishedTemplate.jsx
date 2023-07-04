import React, { useContext, useState } from 'react';
import { TemplateContext } from '../../../../context/TemplateContext';
import styles from '../../../../style';
import './styles.css';
import ColorPicker from './ColorPalete';
import PageButtons from './PageButtons';
import FinishedTemplateComponent from './FinishedTemplateComponent';

const FinishedTemplate = () => {
    const { selectedColor, setSelectedColor } = useContext(TemplateContext);
    const [hideImage, setHideImage] = useState(false);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    }

    const handleToggleImageView = () => {
        setHideImage(() => !hideImage)
    }

    return (
        <div className={``}>
            {/*only the user should see this*/}
            <div className='flex items-center flex-col mt-2'>
                <div className='text-center my-5 py-3 shadow-sm xs:w-[80%] w-[95%] rounded-lg'>
                    <small>*Only you can see this</small>
                    <h1 className='py-3 text-[25px] font-semibold'>PREVIEW YOUR PROFILE</h1>
                    <PageButtons />
                    <div className={`${styles.flexAround} mt-5 w-full`}>
                        <div>
                            <h4 className='text-[12px]'>Change background color:</h4>
                            <ColorPicker
                                selectedColor={selectedColor}
                                setSelectedColor={setSelectedColor}
                                handleColorSelect={handleColorSelect}
                            />
                        </div>
                        <h1
                            onClick={handleToggleImageView}
                            className='cursor-pointer'>
                            {hideImage ? 'Show Image' : 'Hide Image'}
                        </h1>
                    </div>
                </div>
            </div>
            {/*only the user should see this*/}

            <div className={`xs:m-6 m-1 bg-stone-200 shadow`}>

                <FinishedTemplateComponent hideImage={hideImage} />
            </div>
        </div>
    )
}

export default FinishedTemplate