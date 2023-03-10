import React, { createContext, useEffect, useRef, useState } from 'react';
import { pageItems } from '../constants';

export const Context = preserveRef('c', createContext());

function preserveRef(key, v) {
  if (import.meta.env.PROD) return v;

  const old = import.meta.hot.data[key];
  const now = old || v;

  import.meta.hot.on('vite:beforeUpdate', () => {
    import.meta.hot.data[key] = now;
  });

  return now;
}

export const ContextProvider = ({ children }) => {
  const [toggleOrganisationView, setToggleOrganisationView] = useState(false)
  const [toggleWorkView, setToggleWorkView] = useState(false);
  const [toggleEducationView, setToggleEducationView] = useState(false);
  const [toggleGenderView, setToggleGenderView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(null);

  const itemsPerPage = 20;
  const containerRef = useRef(null);
  const nodeRef = useRef();

  useEffect(() => {
    setData(pageItems.profile);
    setTemplateData(pageItems.templates);
  }, [data, templateData]);


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

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }

  const filterData = () => {
    return pageItems.profile.filter((item) => {
      //filter
      if (filter && (item.org !== filter && item.work !== filter && item.edu !== filter
        && item.edu !== filter && item.gender !== filter)) {
        return false
      }

      //filter by search query
      if (query && (!item.name.toLowerCase().includes(query.toLowerCase()) &&
        !item.work.toLowerCase().includes(query.toLowerCase()))) {
        return false
      }

      return true;
    })
  }

  const getSimilarItemsCount = (items, itemType, value) => {
    if (!Array.isArray(items)) {
      return 0;
    }
    return items.filter(item => item[itemType] === value).length;
  }

  const paginate = (items, currentPage, itemsPerPage) => {
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

  const paginatedItems = paginate(filterData(), currentPage, itemsPerPage);

  return (
    <Context.Provider value={{
      handleFilterClick, handlePageNumber, handleToggleEduView, handleToggleGenderView, handleToggleOrgView, handleToggleWorkView,
      toggleEducationView, toggleGenderView, toggleOrganisationView, toggleWorkView, setToggleEducationView, setToggleGenderView,
      setToggleOrganisationView, setToggleWorkView, query, setQuery, getSimilarItemsCount, paginatedItems, filterData,
      currentPage, containerRef, data, favorites, setFavorites, removeFromFavorites, nodeRef, templateData
    }}>
      {children}
    </Context.Provider>
  );
};
