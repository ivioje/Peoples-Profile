import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import styles from '../../style'
import SingleTemplate from './singleTemplate'

const TemplatesList = () => {

    const { filterTemplateData, query } = useContext(Context);
    //
    return (
        <section className={`font-firaSans `}>
            <div className={`${styles.flexBtw} flex-wrap flex-col xs:flex-row md:pb-16 md:pt-12 pb-8 pt-3 px-3 md:px-28`}>
                {filterTemplateData().length ? filterTemplateData().map((item) => (
                    <SingleTemplate item={item} key={item.id} />
                )) :
                    <div className='text-[15px] text-center w-full'>
                        Your search did not return a template with the name <b>"{query}"</b>. Try another search term.
                    </div>}
            </div>
        </section>
    )
}

export default TemplatesList