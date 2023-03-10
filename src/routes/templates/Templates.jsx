import React, { useContext } from 'react'
import Search from '../../components/Search'
import Header from '../../components/templates/header'
import RequestTemplate from '../../components/templates/requestTemplate'
import TemplatesList from '../../components/templates/templatesList'
import { Context } from '../../context/Context'

const Templates = () => {
    const { query } = useContext(Context);

    return (
        <section>
            <Header />
            <Search />
            <h2 className='text-primary font-semibold uppercase text-[14px] text-center font-firaSans'>
                {query}
            </h2>
            <TemplatesList />
            <RequestTemplate />
        </section>
    )
}

export default Templates