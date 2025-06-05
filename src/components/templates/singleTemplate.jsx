import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TemplateContext } from "../../context/TemplateContext";
import styles from "../../style";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const SingleTemplate = ({ item }) => {
	const { bookmark, setBookmark } = useContext(TemplateContext);

	const addToBookmarks = () => {
		// Check if the template is already in the bookmarked list
		if (bookmark.find((mark) => mark.id === item.id)) {
			return;
		}
		// Otherwise, add the template to the bookmarked list
		setBookmark([...bookmark, item]);
	};

	const isInBookmarks = bookmark.some((mark) => mark.id === item.id);

	return (
		<div
			key={item.id}
			className={`xs:w-[49%] p-2 md:p-0 md:w-[30%] w-full md:mx-2 my-6 border-b relative ${
				item.state ? "" : ""
			}`}
		>
			<h1
				style={{ background: `${item.color}` }}
				className="text-lightGray text-[20px] font-[600] p-1 "
			>
				{item.type} Template
			</h1>
			<p className="font-poppins  px-1 py-4">{item.description}.</p>
			<div className={`${styles.flexBtw} p-1`}>
				<Link to={`${item.slug}-template`}>
					<button
						style={{ color: `${item.color}`, borderColor: `${item.color}` }}
						className="font-[500] p-1 border opacity-80
                        hover:opacity-100 hover:transition-opacity"
					>
						Use Template
					</button>
				</Link>
				{/**add to bookmarks */}
				<div onClick={addToBookmarks}>
					{isInBookmarks ? (
						<button
							className={` ${styles.flexCenter} rounded-full text-primary bg-lightGray w-[40px] h-[40px]`}
							title="bookmarked"
						>
							<BsBookmarkFill />
						</button>
					) : (
						<button
							className={` ${styles.flexCenter} rounded-full text-primary bg-lightGray w-[40px] h-[40px]`}
							title="bookmark"
						>
							<BsBookmark />
						</button>
					)}
				</div>{" "}
			</div>
			<hr className="opacity-5" />
			<div
				className={`absolute h-full top-0 w-full flex items-center justify-center opacity-80 bg-black ${
					item.state ? "hidden" : ""
				}`}
			>
				<h1 className="text-dimWhite text-[25px] font-bold font-ysabeau">
					COMING SOON
				</h1>
			</div>
		</div>
	);
};

export default SingleTemplate;
