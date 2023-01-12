import React from 'react'
import { BsCaretDown } from 'react-icons/bs'
import styles from '../../../style'

const ChooseTemplates = ({ setToggle }) => {
    return (
        <section>
            <button className={`p-1 text-primary ${styles.flexCenter} `}
            onClick={() => setToggle(false)}>
                Templates
                <BsCaretDown className='m-1' />
            </button>
        </section>
    )
}

export default ChooseTemplates