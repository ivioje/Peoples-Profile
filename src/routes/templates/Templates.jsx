import React from 'react'
import Search from '../../components/Search'
import Header from './header'
import RequestTemplate from './requestTemplate'
import TemplatesList from './templatesList'

const Templates = () => (
    <section>
        <Header />
        <Search />
        <TemplatesList />
        <RequestTemplate />
    </section>
)

export default Templates