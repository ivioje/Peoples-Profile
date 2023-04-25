import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from '../../../../style';

const Summary = ({ summaryContent, setSummaryContent }) => {

    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`sm:w-3/4 w-full`}>
                <ReactQuill
                    id="summary"
                    theme='snow'
                    className='h-[200px] xs:my-14 my-8 mb-24'
                    value={summaryContent}
                    onChange={(e) => setSummaryContent(e)}
                />
            </div>
        </section>
    )
}

export default Summary