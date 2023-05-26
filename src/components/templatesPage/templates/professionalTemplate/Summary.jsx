import React from 'react';
import styles from '../../../../style';
import TextEditor from './TextEditor';

const Summary = ({ summaryContent, setSummaryContent }) => {

    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`sm:w-3/4 w-full`}>

                <TextEditor
                    id={'summary'}
                    className={'h-[200px] xs:my-14 my-8 mb-24'}
                    value={summaryContent}
                    setValue={(e) => setSummaryContent(e)}
                />
            </div>
        </section>
    )
}

export default Summary