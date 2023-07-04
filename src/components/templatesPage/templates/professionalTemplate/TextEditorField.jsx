import React, { useState } from 'react';
import TextEditor from './TextEditor';

const TextEditorField = ({ id, className }) => {
    //const [editorValue, setEditorValue] = useState(value);

    // const handleEditorChange = (newValue) => {
    //     setEditorValue(newValue);
    //     onChange(newValue);
    // };

    return (
        <TextEditor
            id={id}
            //value={editorValue}
            //onChange={onChange}
            className={className}
        />
    );
};

export default TextEditorField