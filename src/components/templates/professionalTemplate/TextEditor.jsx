import PropTypes from 'prop-types';
import { RichTextEditor } from '@mantine/rte';

const TextEditor = ({ id, className, value, onChange }) => (
    <RichTextEditor
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        controls={[
            ['bold', 'italic', 'unorderedList', 'orderedList', 'clean']
        ]}
        sticky={false}
    />
);

TextEditor.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextEditor;