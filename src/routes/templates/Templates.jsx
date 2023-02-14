import React from 'react'
import Search from '../../components/Search'
import Header from '../../components/templates/header'
import RequestTemplate from '../../components/templates/requestTemplate'
import TemplatesList from '../../components/templates/templatesList'

const Templates = () => (
    <section>
        <Header />
        <Search />
        <TemplatesList />
        <RequestTemplate />
    </section>
)

export default Templates