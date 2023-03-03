import React, { useState, useEffect, createContext } from 'react'

const Context = createContext("toggle");

const ContextProvider = ({ children }) => {

  const [toggleOrganisationsView, setToggleOrganisationsView] = useState(false)
  const [toggleWorkView, setToggleWorkView] = useState(false);
  const [toggleEducationView, setToggleEducationView] = useState(false);
  const [toggleGenderView, setToggleGenderView] = useState(false);

  // function handleToggleOrgView() {
  //   setToggleOrganisationsView(click => !click)
  // }
  // function handleToggleEducationView() {
  //   setToggleEducationView(click => !click)
  // }
  // function handleToggleWorkView() {
  //   setToggleWorkView(click => !click)
  // }
  // function handleToggleGenderView() {
  //   setToggleGenderView(click => !click)
  // }

  return (
    <Context.Provider value={{
      toggleEducationView, toggleGenderView, toggleWorkView, toggleOrganisationsView, setToggleOrganisationsView

    }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }

