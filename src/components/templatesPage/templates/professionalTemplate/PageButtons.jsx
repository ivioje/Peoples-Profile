import React from 'react';
import { Button } from '@mui/material'
import styles from '../../../../style';

const PageButtons = () => {
    return (
        <div className={`${styles.flexCenter}`}>
            <Button style={{ 'background': '#171F3A', 'color': 'whitesmoke', 'padding': '5px', 'margin': '.2rem' }}>Download</Button>
            <Button style={{ 'background': '#171F3A', 'color': 'whitesmoke', 'padding': '5px', 'margin': '.2rem' }}>Print</Button>
        </div>
    )
}

export default PageButtons