import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from '../../../../style';


const Skills = ({ data }) => {
    const [content, setContent] = useState();

    data.skill = content

    const editorChange = (newValue) => {
        setContent(newValue)
    }

    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`sm:w-3/4 w-full`}>
                <ReactQuill
                    theme='snow'
                    className='h-[200px] xs:my-14 my-8 mb-24'
                    value={content}
                    onChange={editorChange}
                />
            </div>
        </section>
    )
}

export default Skills