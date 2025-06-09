import React from 'react'

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-9 p-2 placeholder:font-[300] bg-slate-50 rounded w-full border border-gray-300"
        value={value}
        onChange={onChange}
    />
  )
}

export default Input