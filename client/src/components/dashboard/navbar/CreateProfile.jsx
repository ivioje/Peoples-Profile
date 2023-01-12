import React from 'react'

const CreateProfile = ({ setToggle }) => {
    return (
        <button className='py-1 px-4 bg-slate-500 text-secondary'
        onClick={() => setToggle(false)}>
            Create a profile
        </button>
    )
}

export default CreateProfile