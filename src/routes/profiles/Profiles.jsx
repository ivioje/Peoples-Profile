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

  useEffect(() => {
    setData(cardItems)
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

  return (
    <>
      <Header
        handleToggleOrgView={handleToggleOrgView}
        toggleOrganisationView={toggleOrganisationView}
        toggleWorkView={toggleWorkView}
        handleToggleWorkView={handleToggleWorkView}
        toggleEducationView={toggleEducationView}
        handleToggleEduView={handleToggleEduView}
        toggleGenderView={toggleGenderView}
        handleToggleGenderView={handleToggleGenderView}

      />
      <Cards
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  )
}

export default Profiles