import React, { useEffect, useRef, useState } from 'react';
import { cardItems } from '../../constants';
import Cards from '../../components/profiles/cards';
import Header from '../../components/profiles/header';

const Profiles = () => {
  const [toggleOrganisationView, setToggleOrganisationView] = useState(false)
  const [toggleWorkView, setToggleWorkView] = useState(false);
  const [toggleEducationView, setToggleEducationView] = useState(false);
  const [toggleGenderView, setToggleGenderView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(null);

  const itemsPerPage = 20;
  const containerRef = useRef(null);

  useEffect(() => {
    setData(cardItems.profile)
  }, [data]);

  const handleToggleOrgView = () => {
    setToggleOrganisationView(click => !click)
  }
  const handleToggleWorkView = () => {
    setToggleWorkView(click => !click)
  }
  const handleToggleEduView = () => {
    setToggleEducationView(click => !click)
  }
  const handleToggleGenderView = () => {
    setToggleGenderView(click => !click)
  }

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue)
  }

  const filterData = () => {
    return data.filter((item) => {
      //filter
      if(filter && (item.org !== filter && item.work !== filter && item.edu !== filter
        && item.edu !== filter && item.gender !== filter)) {
        return false
      }

      //filter by search query
      if(query && (!item.name.toLowerCase().includes(query.toLowerCase()) &&
       !item.work.toLowerCase().includes(query.toLowerCase()))) {
        return false
      }

      return true;
    })
  }

  function getSimilarItemsCount(items, itemType, value) {
    if(!Array.isArray(items)) {
      return 0;
    }
    return items.filter(item => item[itemType] === value).length;
  }

  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    return items.slice(startIndex, endIndex);
  }

  const handlePageNumber = (pageNumber) => {
    const container = containerRef.current;
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentPage(pageNumber)
  }

  const paginatedItems = paginate(filterData(), currentPage, itemsPerPage)


  return (
    <>
      <Header
       data={data}
        handleToggleOrgView={handleToggleOrgView}
        toggleOrganisationView={toggleOrganisationView}
        toggleWorkView={toggleWorkView}
        handleToggleWorkView={handleToggleWorkView}
        toggleEducationView={toggleEducationView}
        handleToggleEduView={handleToggleEduView}
        toggleGenderView={toggleGenderView}
        handleToggleGenderView={handleToggleGenderView}
        query={query}
        setQuery={setQuery}
        handleFilterClick={handleFilterClick}
        setToggleOrganisationView={setToggleOrganisationView}
        setToggleWorkView={setToggleWorkView}
        setToggleEducationView={setToggleEducationView}
        setToggleGenderView={setToggleGenderView}
        getSimilarItemsCount={getSimilarItemsCount}

      />
      <Cards
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
        paginatedItems={paginatedItems}
        filterData={filterData}
        handlePageNumber={handlePageNumber}
        currentPage={currentPage}
        containerRef={containerRef}
      />
    </>
  )
}

export default Profiles