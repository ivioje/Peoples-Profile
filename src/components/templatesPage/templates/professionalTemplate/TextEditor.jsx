import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ id, className, value, setValue }) => {

    const modules = {
        toolbar: [
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ],
    };

    const formats = [
        'bold', 'italic',
        'list', 'bullet',
    ];

    return (
        <ReactQuill
            id={id}
            theme='snow'
            className={className}
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
        />
    )
}

export default TextEditor