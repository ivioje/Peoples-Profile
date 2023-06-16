import React, { useState } from 'react';
import TextEditor from './TextEditor';

const TextEditorField = ({ id, value, onChange }) => {
    const [editorValue, setEditorValue] = useState(value);

    const handleEditorChange = (newValue) => {
        setEditorValue(newValue);
        onChange(newValue);
    };

    return (
        <TextEditor
            id={id}
            value={editorValue}
            onChange={handleEditorChange}
            className=''
        />
    );
};

export default TextEditorField