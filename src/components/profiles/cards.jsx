import React, { useContext } from "react";
import styles from "../../style";
import SingleCard from "./SingleCard";
import { ProfileContext } from "../../context/ProfileContext";

const Cards = () => {
	const {
		filterData,
		currentPage,
		setCurrentPage,
		itemsPerPage,
		containerRef,
		query,
	} = useContext(ProfileContext);

	const filtered = filterData();
	const startIdx = (currentPage - 1) * itemsPerPage;
	const endIdx = startIdx + itemsPerPage;
	const paginatedItems = filtered.slice(startIdx, endIdx);

	const handlePageNumber = (pageNumber) => {
		setCurrentPage(pageNumber);
		if (containerRef?.current) {
			containerRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="pb-20">
			{/**display the search query the user entered */}
			<h1 className="text-center text-primary uppercase text-[14px] font-semibold">
				{query}
			</h1>

			{/**pagination */}
			<div
				className="flex justify-center flex-wrap font-poppins pt-8 pb-6"
				ref={containerRef}
			>
				{paginatedItems.length < 1 ? (
					<div className="text-[13px] text-center">
						The search term you entered <b>"{query}"</b> did not match any
						profile. Please try a different search term.
					</div>
				) : (
					paginatedItems.map((items) => (
						<div key={items.id}>
							<SingleCard items={items} />
						</div>
					))
				)}
			</div>
			<div className="flex justify-center">
				{filtered.length > itemsPerPage &&
					Array.from(
						{ length: Math.ceil(filtered.length / itemsPerPage) },
						(_, i) => i + 1
					).map((pageNumber) => (
						<button
							key={pageNumber}
							onClick={() => handlePageNumber(pageNumber)}
							className={
								currentPage === pageNumber
									? `bg-slate-500 text-dimWhite ${styles.flexCenter} border p-2 m-2 w-[30px] h-[30px] rounded-full font-semibold`
									: `${styles.flexCenter} border p-2 m-2 w-[30px] h-[30px] rounded-full font-semibold`
							}
						>
							{pageNumber}
						</button>
					))}
			</div>
		</section>
	);
};

export default Cards;
