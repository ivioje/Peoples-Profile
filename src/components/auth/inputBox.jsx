import React from 'react'

const InputBox = ({ name, type, placeholder }) => {
    return (
        <input name={name} type={type} placeholder={placeholder}
            className='h-9 p-2 mb-8 placeholder: placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100' />
    )
}

export default InputBox