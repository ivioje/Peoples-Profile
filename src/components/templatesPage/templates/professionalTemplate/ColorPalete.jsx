import React from 'react';
import styles from '../../../../style';

const ColorPicker = ({ selectedColor, handleColorSelect }) => {

    return (
        <div className="flex flex-wrap">
            <button
                className={`${styles.colorButton} ${selectedColor === '#171F3A' ? styles.activeColorBtn : ''}`}
                style={{ backgroundColor: '#171F3A' }}
                onClick={() => handleColorSelect('#171F3A')}
            ></button>
            <button
                className={`${styles.colorButton} ${selectedColor === '#0A66C2' ? styles.activeColorBtn : ''}`}
                style={{ backgroundColor: '#0A66C2' }}
                onClick={() => handleColorSelect('#0A66C2')}
            ></button>
            <button
                className={`${styles.colorButton} ${selectedColor === '#1C1F69' ? styles.activeColorBtn : ''}`}
                style={{ backgroundColor: '#1C1F69' }}
                onClick={() => handleColorSelect('#1C1F69')}
            ></button>
            <button
                className={`${styles.colorButton} ${selectedColor === '#333333' ? styles.activeColorBtn : ''}`}
                style={{ backgroundColor: '#333333' }}
                onClick={() => handleColorSelect('#333333')}
            ></button>
        </div>
    );
};

export default ColorPicker;
