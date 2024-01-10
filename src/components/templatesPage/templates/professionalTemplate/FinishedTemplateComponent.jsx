import React, { useContext } from "react";
import { TemplateContext } from "../../../../context/TemplateContext";
import styles from "../../../../style";
import HtmlToListItems from "../../../utils/htmlToList";
import { BsLink } from "react-icons/bs";

const FinishedTemplateComponent = ({ hideImage }) => {
	const {
		selectedColor,
		summaryContent,
		personalDetails,
		workExperience,
		skillContent,
		education,
		inputValues,
		selectedFile,
	} = useContext(TemplateContext);
	return (
		<section
			id="template"
			className={`${styles.flexAround} sm:flex-row flex-col p-3 w-full sm:h-[1200px]  h-full aspect-square font-poppins text-text_color`}
		>
			<div
				className={`p-5 sm:w-[30%] text-[14px] w-full sm:h-full ${styles.flexStart} flex-col text-dimWhite text-opacity-90`}
				style={{ backgroundColor: selectedColor }}
			>
				<div
					className={`mt-6 w-[200px] h-[200px] ${
						hideImage ? "hidden" : "block"
					}`}
				>
					{selectedFile ? (
						<img
							src={URL.createObjectURL(selectedFile)}
							alt="Uploaded photo"
							className="w-full h-full rounded-sm"
						/>
					) : (
						<img
							src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
							alt="Placeholder image"
							className="border"
						/>
					)}
				</div>
				{personalDetails.map((data, index) => (
					<div
						key={index}
						className="w-full"
					>
						<div
							className={` flex flex-col sm:hidden uppercase w-full font-[700] mb-1 py-4 border border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400`}
						>
							<h1 className="xs:text-[27px] text-[25px]">{`${data.firstname} ${data.lastname}`}</h1>
							<h6 className="text-text_color">{data.occupation}</h6>
							{console.log(data)}
						</div>
						<div className={`mt-6 w-full flex flex-col contact_items`}>
							<h1
								className="border border-t-0 border-l-0 border-r-0 mt-6 font-bold"
								key={`contact-${index}`}
							>
								CONTACT
							</h1>
							<div
								className={`flex flex-col h-auto my-2`}
								key={`location-${index}`}
							>
								<span className="w-full text-[9px]">Location</span>
								<h2 className="w-full">{`${data.address}, ${data.city}, ${data.country}`}</h2>
							</div>
							<div
								className={`flex flex-col h-auto my-2`}
								key={`phone-${index}`}
							>
								<span className="w-full text-[9px]">Phone</span>
								<h2 className="w-full">{data.phone}</h2>
							</div>
							<div
								className={`flex flex-col h-auto my-2`}
								key={`mail-${index}`}
							>
								<span className="w-full text-[9px]">Mail</span>
								<h2 className="w-full">{data.email}</h2>
							</div>
						</div>
					</div>
				))}
				<div className={`w-full `}>
					<h1
						className={`border border-t-0 border-l-0 border-r-0 mt-6 font-bold`}
					>
						SKILLS
					</h1>
					<div>{HtmlToListItems(skillContent)}</div>
				</div>
				<div className={`w-full`}>
					<h2
						className={`border border-t-0 border-l-0 border-r-0 mt-6 font-bold`}
					>
						LINKS
					</h2>
					<div className={`${styles.flexStart} w-full links my-3`}>
						<a
							href={inputValues["LinkedIn"] || ""}
							target="_blank"
						>
							<BsLink /> LinkedIn
						</a>
						<a
							href={inputValues["Website"] || ""}
							target="_blank"
						>
							<BsLink /> Website
						</a>
						<a
							href={inputValues["Twitter"] || ""}
							target="_blank"
						>
							<BsLink /> Twitter
						</a>
						<a
							href={inputValues["Facebook"] || ""}
							target="_blank"
						>
							<BsLink /> Facebook
						</a>
						<a
							href={inputValues["GitHub"] || ""}
							target="_blank"
						>
							<BsLink /> GitHub
						</a>
					</div>
				</div>
			</div>

			<div
				className={`sm:w-[70%] w-full sm:h-full flex justify-start items-start flex-col tmp_content px-3 bg-white sm:pb-0 pb-10 `}
			>
				<div
					className={`xs:text-[30px] hidden sm:flex text-[25px] w-full font-[700] mb-1 py-4 border border-t-0 border-l-0 border-r-0 border-b-2 border-[#3f3f3f]`}
					style={{ color: selectedColor }}
				>
					{personalDetails.map((data, index) => (
						<h1 key={index}>{`${data.firstname} ${data.lastname}`}</h1>
					))}
				</div>
				<div className={`my-8 w-full`}>
					<h1>Professionl summary</h1>
					<div>{HtmlToListItems(summaryContent)}</div>
				</div>
				<div
					className={`my-4 border border-b-0 border-l-0 border-r-0 border-t-2 w-full`}
				>
					<h1>WORK HISTORY</h1>
					{workExperience.map((data, index) => (
						<div key={index}>
							<div className={`${styles.flexBtw} mt-6 py-1`}>
								<h3 className="font-bold text-gray-600">{data.organization}</h3>
								<p className="text-[11px] text-gray-500">
									{`${new Date(data.startDate).toLocaleString("en-US", {
										year: "numeric",
										month: "short",
									})} - ${new Date(data.endDate).toLocaleString("en-US", {
										year: "numeric",
										month: "short",
									})}`}
								</p>{" "}
							</div>
							<h3 className="text-[15px] capitalize">
								{data.jobTitle} - <span>{`${data.city}, ${data.country}`}</span>
							</h3>
							{/* <div key={index}>{HtmlToListItems(workDescription)}</div> */}
						</div>
					))}
				</div>
				<div
					className={`my-4 border border-b-0 border-l-0 border-r-0 border-t-2 w-full h-full`}
				>
					<h1>EDUCATION</h1>
					{education.map((data, index) => (
						<div key={index}>
							<div className={`${styles.flexBtw} mt-3 py-1`}>
								<h3 className="font-bold text-gray-600">{data.institution}</h3>
								<p className="text-[11px] text-gray-500">
									{`${new Date(data.startDate).toLocaleString("en-US", {
										year: "numeric",
										month: "short",
									})} - ${new Date(data.endDate).toLocaleString("en-US", {
										year: "numeric",
										month: "short",
									})}`}
								</p>{" "}
							</div>
							<h3 className="text-[15px] capitalize">
								{data.course}{" "}
								<span>{`- ${data.honours} ${data.qualification}`}</span>
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FinishedTemplateComponent;
