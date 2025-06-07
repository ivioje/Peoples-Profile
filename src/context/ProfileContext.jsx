import React, { createContext, useEffect, useRef, useState } from "react";
import { pageItems } from "../constants";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
	const [toggleOrganisationView, setToggleOrganisationView] = useState(false);
	const [toggleWorkView, setToggleWorkView] = useState(false);
	const [toggleEducationView, setToggleEducationView] = useState(false);
	const [toggleGenderView, setToggleGenderView] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [filter, setFilter] = useState(null);
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);
	const itemsPerPage = 20;
	const containerRef = useRef(null);
	const nodeRef = useRef(null);

	useEffect(() => {
		setData(pageItems.profile);
	}, []);

	const handleToggleOrgView = () => setToggleOrganisationView((v) => !v);
	const handleToggleWorkView = () => setToggleWorkView((v) => !v);
	const handleToggleEduView = () => setToggleEducationView((v) => !v);
	const handleToggleGenderView = () => setToggleGenderView((v) => !v);

	const removeFromFavorites = (id) =>
		setFavorites(favorites.filter((favorite) => favorite.id !== id));
	const handleFilterClick = (filterValue) => setFilter(filterValue);

	const filterData = () => {
		let filtered = data;
		if (filter)
			filtered = filtered.filter((item) => {
				return (
					item.org === filter ||
					item.work === filter ||
					item.edu === filter ||
					item.gender === filter
				);
			});
		if (query)
			filtered = filtered.filter((item) =>
				item.name.toLowerCase().includes(query.toLowerCase())
			);
		return filtered;
	};

	const getSimilarItemsCount = (data, key, value) => {
		return data.filter((item) => item[key] === value).length;
	};

	return (
		<ProfileContext.Provider
			value={{
				toggleOrganisationView,
				toggleWorkView,
				toggleEducationView,
				toggleGenderView,
				favorites,
				setFavorites,
				currentPage,
				setCurrentPage,
				filter,
				setFilter,
				query,
				setQuery,
				data,
				setData,
				itemsPerPage,
				containerRef,
				nodeRef,
				handleToggleOrgView,
				handleToggleWorkView,
				handleToggleEduView,
				handleToggleGenderView,
				removeFromFavorites,
				handleFilterClick,
				filterData,
				getSimilarItemsCount,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
