import React, { useContext } from "react";
import bgImg from "../assets/tempHeaderImg.jpg";
import wave from "../assets/wave.svg";
import { Link } from "react-router-dom";
import { TemplateContext } from "../context/TemplateContext";
import Search from "../components/common/Search";
import SingleTemplate from "../components/templates/singleTemplate";
import styles from "../styles/style";

const Templates = () => {
	const { query, setQuery, filterTemplateData } = useContext(TemplateContext);

	return (
		<section>
			{/**header */}
			<div className="font-poppins ">
				<div className="h-[140px] relative">
					<img
						src={bgImg}
						alt="cover"
						className="object-cover h-[140px] w-full"
					/>
					<h2 className="text-lightGray overlay flex items-center justify-center text-[20px] ss:text-[30px] font-[600] p-1">
						Choose from several templates <br /> to suit your need.
					</h2>
				</div>

				<p className="text-center font-normal py-6 px-1">
					<Link
						to="/login"
						className="border-b-2 border-dotted border-gray-500 text-gradient"
					>
						Log in
					</Link>{" "}
					to use and bookmark a template
				</p>
			</div>

			{/**Search component */}
			<Search
				query={query}
				setQuery={setQuery}
			/>
			<h2 className="text-primary font-semibold uppercase text-[14px] text-center font-firaSans">
				{query}
			</h2>

			{/**templates list component */}
			<section className={`font-firaSans `}>
				<div
					className={`flex justify-between flex-wrap flex-col xs:flex-row md:pb-16 md:pt-12 pb-8 pt-3 px-3 md:px-28`}
				>
					{filterTemplateData().length ? (
						filterTemplateData().map((item) => (
							<SingleTemplate
								item={item}
								key={item.id}
							/>
						))
					) : (
						<div className="text-[15px] text-center w-full">
							Your search did not return a template with the name{" "}
							<b>"{query}"</b>. Try another search term.
						</div>
					)}
				</div>
			</section>

			{/**request template section */}
			<section
				className="bg-cover bg-no-repeat bg-bottom font-firaSans relative "
				style={{ backgroundImage: `url(${wave})` }}
			>
				<div className={`${styles.flexStart} div-overlay px-2 h-full`}>
					<h1 className="md:text-[64px] ss:text-[30px] text-[22px] text-gradient font-[600] pt-[40px] pb-2 ">
						Request for a template
					</h1>
					<p className="font-poppins text-center w-full md:w-1/2 sm:text-[20px] font-[500] opacity-80 ">
						Can’t find a template that suits your need? Use our{" "}
						<Link className="text-gradient border-b-2 border-dotted border-gray-500">
							basic template{" "}
						</Link>
						or request for a template by filling in the form below. We will
						review your submission and be in touch with you!
					</p>

					{/**request template form */}
					<form
						className={`${styles.flexCol} pt-8 pb-[40px] requestForm w-full sm:w-[600px]`}
					>
						<input
							name="name"
							type="text"
							placeholder="Template name"
						/>
						<textarea
							name="description"
							rows="3"
							cols="21"
							type="text"
							placeholder="Template description"
						/>
						<input
							name="email"
							type="email"
							placeholder="Email address"
						/>
						<button
							name="submit"
							type="submit"
							className="request-btn text-dimWhite text-[18px] primary-gradient w-[200px] font-[500] "
						>
							Request Template
						</button>
					</form>
				</div>
			</section>
		</section>
	);
};

export default Templates;
