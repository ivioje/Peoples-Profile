import React, { useEffect, useState } from 'react';
import { cardItems } from '../../constants';
import Cards from '../../components/profiles/cards';
import Header from '../../components/profiles/header';

const Profiles = () => {
  const [toggleOrganisationView, setToggleOrganisationView] = useState(false)
  const [toggleWorkView, setToggleWorkView] = useState(false);
  const [toggleEducationView, setToggleEducationView] = useState(false);
  const [toggleGenderView, setToggleGenderView] = useState(false);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(null);

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
      if(filter && (item.org !== filter && item.work !== filter && item.edu !== filter)) {
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
        getSimilarItemsCount={getSimilarItemsCount}

      />
      <Cards
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
        filterData={filterData}
      />
    </>
  )
}

export default Profiles