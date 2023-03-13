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
  const [bookmark, setBookmark] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(null);

  const itemsPerPage = 20;
  const containerRef = useRef(null);
  const nodeRef = useRef(null);
  const formRef = useRef();

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

  const removeFromBookmarks = (id) => {
    setBookmark(bookmark.filter((marked) => marked.id !== id));
  }

  const filterData = () => {
    return data.filter((item) => {
      //filter profiles with buttons
      if (filter && (item.org !== filter && item.work !== filter && item.edu !== filter
        && item.edu !== filter && item.gender !== filter)) {
        return false
      }

      //filter profiles by search query
      if (query && (!item.name.toLowerCase().includes(query.toLowerCase()) &&
        !item.work.toLowerCase().includes(query.toLowerCase()))) {
        return false
      }

      return true;
    })
  }

  const filterTemplateData = () => {
    return templateData.filter((item) => {
      if (query && !item.type.toLowerCase().includes(query.toLowerCase())) {
        return false
      };

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

  const scrollToTop = () => {
    let linkElement = document.getElementById('userLink');

    linkElement.addEventListener('click', () => {
      const container = nodeRef.current;
     if(container) {
       container.scrollIntoView({ behavior: 'smooth', block: 'start' })
     }
    })
  }

  return (
    <Context.Provider value={{
      handleFilterClick, handlePageNumber, handleToggleEduView, handleToggleGenderView, handleToggleOrgView, handleToggleWorkView,
      toggleEducationView, toggleGenderView, toggleOrganisationView, toggleWorkView, setToggleEducationView, setToggleGenderView,
      setToggleOrganisationView, setToggleWorkView, query, setQuery, getSimilarItemsCount, paginatedItems, filterData, bookmark,
      currentPage, containerRef, data, favorites, setFavorites, removeFromFavorites, templateData, filterTemplateData, setBookmark,
      removeFromBookmarks, nodeRef, scrollToTop
    }}>
      {children}
    </Context.Provider>
  );
};
