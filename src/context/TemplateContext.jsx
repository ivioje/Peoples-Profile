import React, { createContext, useEffect, useState } from "react";
import { pageItems } from "../constants";

export const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
	const [templateData, setTemplateData] = useState([]);
	const [bookmark, setBookmark] = useState([]);
	const [query, setQuery] = useState("");
	const [toggle, setToggle] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);
	const [activeButton, setActiveButton] = useState(1);
	const [isPresent, setIsPresent] = useState(false);
	const [selectedColor, setSelectedColor] = useState("#171F3A");
	const [inputValues, setInputValues] = useState({});
	const [skillContent, setSkillContent] = useState(
		localStorage.getItem("skillsContent") || ""
	);
	const [summaryContent, setSummaryContent] = useState(
		localStorage.getItem("summaryContent") || ""
	);
	const [personalDetails, setPersonalDetails] = useState(
		JSON.parse(localStorage.getItem("userDetails")) || [
			{
				photo: "",
				firstname: "",
				lastname: "",
				address: "",
				city: "",
				country: "",
				zipcode: "",
				phone: "",
				email: "",
			},
		]
	);
	const [workExperience, setWorkExperience] = useState(
		JSON.parse(localStorage.getItem("workExperienceDetails")) || [
			{
				jobTitle: "",
				organization: "",
				startDate: "",
				city: "",
				country: "",
				endDate: "",
				occupation: "",
				description: "",
				isPresent: false,
			},
		]
	);
	const [education, setEducation] = useState(
		JSON.parse(localStorage.getItem("storedEducationDetails")) || [
			{
				institution: "",
				qualification: "",
				honours: "",
				course: "",
				startDate: "",
				endDate: "",
				isPresent: false,
			},
		]
	);

	useEffect(() => {
		setTemplateData(pageItems.templates);
	}, []);

	useEffect(() => {
		localStorage.setItem("skillsContent", skillContent);
		localStorage.setItem("summaryContent", summaryContent);
	}, [skillContent, summaryContent]);

	useEffect(() => {
		const savedInputValues = JSON.parse(localStorage.getItem("inputValues"));
		if (savedInputValues) setInputValues(savedInputValues);
	}, []);

	const filterTemplateData = () => {
		return templateData.filter((item) => {
			if (query && !item.type.toLowerCase().includes(query.toLowerCase()))
				return false;
			return true;
		});
	};

	const removeFromBookmarks = (id) =>
		setBookmark(bookmark.filter((marked) => marked.id !== id));

	const handleAddField = (fieldType) => {
		switch (fieldType) {
			case "workExperience":
				setWorkExperience([
					...workExperience,
					{
						jobTitle: "",
						organization: "",
						startDate: "",
						city: "",
						country: "",
						endDate: "",
						occupation: "",
						description: "",
						isPresent: false,
					},
				]);
				break;
			case "education":
				setEducation([
					...education,
					{
						institution: "",
						qualification: "",
						honours: "",
						course: "",
						startDate: "",
						endDate: "",
						isPresent: false,
					},
				]);
				break;
			default:
				break;
		}
	};

	const handleInputChange = (fieldType, index, event) => {
		const { name, value } = event.target;
		if (fieldType === "workExperience") {
			const updated = [...workExperience];
			updated[index][name] = value;
			setWorkExperience(updated);
		} else if (fieldType === "education") {
			const updated = [...education];
			updated[index][name] = value;
			setEducation(updated);
		}
	};

	const handleRemoveField = (fieldType, index) => {
		if (fieldType === "workExperience") {
			setWorkExperience(workExperience.filter((_, i) => i !== index));
		} else if (fieldType === "education") {
			setEducation(education.filter((_, i) => i !== index));
		}
	};

	return (
		<TemplateContext.Provider
			value={{
				templateData,
				setTemplateData,
				bookmark,
				setBookmark,
				query,
				setQuery,
				toggle,
				setToggle,
				activeStep,
				setActiveStep,
				selectedFile,
				setSelectedFile,
				activeButton,
				setActiveButton,
				isPresent,
				setIsPresent,
				selectedColor,
				setSelectedColor,
				inputValues,
				setInputValues,
				skillContent,
				setSkillContent,
				summaryContent,
				setSummaryContent,
				personalDetails,
				setPersonalDetails,
				workExperience,
				setWorkExperience,
				education,
				setEducation,
				filterTemplateData,
				removeFromBookmarks,
				handleAddField,
				handleInputChange,
				handleRemoveField,
			}}
		>
			{children}
		</TemplateContext.Provider>
	);
};
