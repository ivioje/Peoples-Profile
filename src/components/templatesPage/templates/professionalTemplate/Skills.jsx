import React from 'react';
import styles from '../../../../style';
import TextEditor from './TextEditor';

const Skills = ({ skillContent, setSkillContent }) => {

    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`sm:w-3/4 w-full`}>

                <TextEditor
                    className={'h-[200px] xs:my-14 my-8 mb-24'}
                    value={skillContent}
                    setValue={(e) => setSkillContent(e)}
                />
            </div>
        </section>
    )
}

export default Skills
