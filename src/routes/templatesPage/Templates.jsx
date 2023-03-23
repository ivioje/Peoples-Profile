import React, { useContext } from 'react'
import Search from '../../components/Search'
import Header from '../../components/templatesPage/header'
import RequestTemplate from '../../components/templatesPage/requestTemplate'
import TemplatesList from '../../components/templatesPage/templatesList'
import { TemplateContext } from '../../context/TemplateContext'

const Templates = () => {
    const { query, setQuery } = useContext(TemplateContext);

    return (
        <section>
            <Header />
            <Search query={query} setQuery={setQuery} />
            <h2 className='text-primary font-semibold uppercase text-[14px] text-center font-firaSans'>
                {query}
            </h2>
            <TemplatesList />
            <RequestTemplate />
        </section>
    )
}

export default Templates