import PropTypes from 'prop-types';
import styles from '../../../style';
import TextEditor from './TextEditor';

const Skills = ({ skillContent, setSkillContent }) => (
    <section className={styles.flexCenter}>
        <div className="sm:w-3/4 w-full">
            <TextEditor
                className="h-[200px] xs:my-14 my-8 mb-24"
                value={skillContent}
                onChange={setSkillContent}
            />
        </div>
    </section>
);

Skills.propTypes = {
    skillContent: PropTypes.string.isRequired,
    setSkillContent: PropTypes.func.isRequired,
};

export default Skills;
