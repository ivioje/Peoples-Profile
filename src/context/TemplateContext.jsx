import React, { createContext, useEffect, useState } from 'react';
import { pageItems } from '../constants';

export const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
    const [templateData, setTemplateData] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [query, setQuery] = useState('');
    const [toggle, setToggle] = useState(false);
    const [openTemplatesList, setOpenTemplatesList] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [activeButton, setActiveButton] = useState(1);
    const [isPresent, setIsPresent] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#171F3A');
    const bioDetails = [{ photo: "", firstname: "", lastname: "", address: "", city: "", country: "", zipcode: "", phone: "", email: "" }];
    const workExperienceDetails = [{ jobTitle: "", organization: "", startDate: "", city: "", country: "", endDate: "", description: "", check: "" }];
    const educationDetails = [{ institution: "", qualification: "", honours: "", course: "", startDate: "", endDate: "", check: "" }];
    const workDescriptionData = { description: "" }

    const [skillContent, setSkillContent] = useState(localStorage.getItem('skillsContent') || '');
    const [summaryContent, setSummaryContent] = useState(localStorage.getItem('summaryContent') || '');
    const [workDescription, setWorkDescription] = useState([{ description: '' }]);
    const [personalDetails, setPersonalDetails] = useState(JSON.parse(localStorage.getItem('userDetails')) || bioDetails);
    const [workExperience, setWorkExperience] = useState(JSON.parse(localStorage.getItem('workExperienceDetails')) || workExperienceDetails);
    const [education, setEducation] = useState(JSON.parse(localStorage.getItem('storedEducationDetails')) || educationDetails);

    useEffect(() => {
        setTemplateData(pageItems.templates);
    }, [templateData]);

    useEffect(() => {
        localStorage.setItem('skillsContent', skillContent);
        localStorage.setItem('summaryContent', summaryContent);
    }, [skillContent, summaryContent]);
    console.log(workDescription);

    const filterTemplateData = () => {
        return templateData.filter((item) => {
            if (query && !item.type.toLowerCase().includes(query.toLowerCase())) {
                return false
            };

            return true;
        })
    }

    const removeFromBookmarks = (id) => {
        setBookmark(bookmark.filter((marked) => marked.id !== id));
    }

    const handleAddField = (fieldType) => {
        switch (fieldType) {
            case "workExperience":
                setWorkExperience([...workExperience, { jobTitle: "", organization: "", startDate: "", city: "", country: "", endDate: "", description: "", check: "" }]);
                break;
            case "education":
                setEducation([...education, { institution: "", qualification: "", honours: "", course: "", startDate: "", endDate: "", check: "" }]);
                break;
            default:
                break;
        }
    };

    const handleRemoveField = (fieldType, index) => {
        switch (fieldType) {
            case "workExperience":
                setWorkExperience([...workExperience.slice(0, index), ...workExperience.slice(index + 1)]);
                break;
            case "education":
                setEducation([...education.slice(0, index), ...education.slice(index + 1)]);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (fieldType, index, event) => {
        const { name, value } = event.target;

        switch (fieldType) {
            case "personalDetails":
                const updatedPersonalDetails = [...personalDetails];
                updatedPersonalDetails[index][name] = value;
                setPersonalDetails(updatedPersonalDetails);
                localStorage.setItem('userDetails', JSON.stringify(updatedPersonalDetails));
                break;
            case "workExperience":
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[index][name] = value;
                setWorkExperience(updatedWorkExperience);
                localStorage.setItem('workExperienceDetails', JSON.stringify(updatedWorkExperience));
                break;
            case "education":
                const updatedEducation = [...education];
                updatedEducation[index][name] = value;
                setEducation(updatedEducation);
                localStorage.setItem('storedEducationDetails', JSON.stringify(updatedEducation));
                break;
            default:
                break;
        }
    };

    const handleQuillChange = (index, value) => {
        const updatedWorkDescription = [...workDescription];
        updatedWorkDescription[index].description = value;
        setWorkDescription(updatedWorkDescription);
        localStorage.setItem('workDescription', JSON.stringify(updatedWorkDescription));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFileChange = e => {
        setSelectedFile(e.target.files[0])
    };

    const showButtonContent = (buttonindex) => {
        setActiveButton(buttonindex)
    }

    return (
        <TemplateContext.Provider value={{
            query, setQuery, bookmark, templateData, filterTemplateData, setBookmark, removeFromBookmarks, openTemplatesList, setOpenTemplatesList, toggle,
            setToggle, workExperience, setWorkExperience, education, setEducation, handleAddField, handleInputChange, handleRemoveField, activeStep, setActiveStep, handleNext, handleBack,
            selectedFile, setSelectedFile, handleFileChange, personalDetails, setPersonalDetails, showButtonContent, activeButton, isPresent, setIsPresent,
            skillContent, setSkillContent, summaryContent, setSummaryContent, workDescription, setWorkDescription, selectedColor, setSelectedColor, handleQuillChange
        }}>
            {children}
        </TemplateContext.Provider>
    )
}