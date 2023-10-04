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
	}, [data]);

	//functions to toggle a state
	const handleToggleOrgView = () => {
		setToggleOrganisationView((click) => !click);
	};
	const handleToggleWorkView = () => {
		setToggleWorkView((click) => !click);
	};
	const handleToggleEduView = () => {
		setToggleEducationView((click) => !click);
	};
	const handleToggleGenderView = () => {
		setToggleGenderView((click) => !click);
	};

	//function to remove from favorites
	const removeFromFavorites = (id) => {
		setFavorites(favorites.filter((favorite) => favorite.id !== id));
	};

	//search filter sub function
	const handleFilterClick = (filterValue) => {
		setFilter(filterValue);
	};

	//function to filter profiles
	const filterData = () => {
		return data.filter((item) => {
			//filter profiles with buttons
			if (
				filter &&
				item.org !== filter &&
				item.work !== filter &&
				item.edu !== filter &&
				item.edu !== filter &&
				item.gender !== filter
			) {
				return false;
			}

			//filter profiles by search query
			if (
				query &&
				!item.name.toLowerCase().includes(query.toLowerCase()) &&
				!item.work.toLowerCase().includes(query.toLowerCase())
			) {
				return false;
			}

			return true;
		});
	};

	//function to get similar items count
	const getSimilarItemsCount = (items, itemType, value) => {
		if (!Array.isArray(items)) {
			return 0;
		}
		return items.filter((item) => item[itemType] === value).length;
	};

	//pagination function
	const paginate = (items, currentPage, itemsPerPage) => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		return items.slice(startIndex, endIndex);
	};

	//
	const handlePageNumber = (pageNumber) => {
		const container = containerRef.current;
		if (container) {
			container.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		setCurrentPage(pageNumber);
	};

	const paginatedItems = paginate(filterData(), currentPage, itemsPerPage);

	const scrollToTop = () => {
		let linkElement = document.getElementById("userLink");

		linkElement.addEventListener("click", () => {
			const container = nodeRef.current;
			if (container) {
				container.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});
	};

	return (
		<ProfileContext.Provider
			value={{
				toggleEducationView,
				toggleOrganisationView,
				toggleWorkView,
				toggleGenderView,
				scrollToTop,
				setToggleEducationView,
				setToggleGenderView,
				setToggleOrganisationView,
				setToggleWorkView,
				handleFilterClick,
				handleToggleEduView,
				handleToggleGenderView,
				handleToggleWorkView,
				handleToggleOrgView,
				getSimilarItemsCount,
				filterData,
				nodeRef,
				handlePageNumber,
				paginatedItems,
				query,
				setQuery,
				data,
				removeFromFavorites,
				favorites,
				setFavorites,
				currentPage,
				containerRef,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
