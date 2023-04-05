import React, { Children, createContext, useEffect, useState } from 'react';
import { pageItems } from '../constants';

export const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
    const [templateData, setTemplateData] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [query, setQuery] = useState('');
    const [toggle, setToggle] = useState(false);
    const [openTemplatesList, setOpenTemplatesList] = useState(false);
    const [workExperience, setWorkExperience] = useState([{ company: "", position: "", startDate: "", endDate: "", description: "" }]);
    const [education, setEducation] = useState([{ institution: "", degree: "", startDate: "", endDate: "", description: "" }]);
    const [skills, setSkills] = useState([{ skill: "", proficiency: "" }]);
    const [certifications, setCertifications] = useState([{ name: "", issuingOrganization: "", issueDate: "" }]);
    const [awards, setAwards] = useState([{ name: "", issuingOrganization: "", issueDate: "" }]);
    const [contact, setContact] = useState({ email: "", phone: "", address: "", country: "" });
    const [languages, setLanguages] = useState([{ name: "", proficiency: "" }]);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);


    useEffect(() => {
        setTemplateData(pageItems.templates);
    }, [templateData]);


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
                setWorkExperience([...workExperience, { company: "", position: "", start: "", end: "" }]);
                break;
            case "education":
                setEducation([...education, { institution: "", degree: "", fieldOfStudy: "", start: "", end: "" }]);
                break;
            case "skills":
                setSkills([...skills, { skill: "", proficiency: "" }]);
                break;
            case "certifications":
                setCertifications([...certifications, { certification: "", issuingOrganization: "", date: "" }]);
                break;
            case "awards":
                setAwards([...awards, { award: "", issuingOrganization: "", date: "" }]);
                break;
            case "languages":
                setLanguages([...languages, ""]);
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
            case "skills":
                setSkills([...skills.slice(0, index), ...skills.slice(index + 1)]);
                break;
            case "certifications":
                setCertifications([...certifications.slice(0, index), ...certifications.slice(index + 1)]);
                break;
            case "awards":
                setAwards([...awards.slice(0, index), ...awards.slice(index + 1)]);
                break;
            case "languages":
                setLanguages([...languages.slice(0, index), ...languages.slice(index + 1)]);
                break;
            default:
                break;
        }
    };

    const handleInputChange = (fieldType, index, event) => {
        const { name, value } = event.target;

        switch (fieldType) {
            case "workExperience":
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[index][name] = value;
                setWorkExperience(updatedWorkExperience);
                break;
            case "education":
                const updatedEducation = [...education];
                updatedEducation[index][name] = value;
                setEducation(updatedEducation);
                break;
            case "skills":
                const updatedSkills = [...skills];
                updatedSkills[index][name] = value;
                setSkills(updatedSkills);
                break;
            case "certifications":
                const updatedCertifications = [...certifications];
                updatedCertifications[index][name] = value;
                setCertifications(updatedCertifications);
                break;
            case "awards":
                const updatedAwards = [...awards];
                updatedAwards[index][name] = value;
                setAwards(updatedAwards);
                break;
            case "contact":
                const updatedContact = { ...contact };
                updatedContact[name] = value;
                setContact(updatedContact);
                break;
            case "languages":
                const updatedLanguages = [...languages];
                updatedLanguages[index] = value;
                setLanguages(updatedLanguages);
                break;
            default:
                break;
        }
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


    return (
        <TemplateContext.Provider value={{
            query, setQuery, bookmark, templateData, filterTemplateData, setBookmark, removeFromBookmarks, openTemplatesList, setOpenTemplatesList, toggle,
            setToggle, workExperience, setWorkExperience, education, setEducation, awards, setAwards, contact, setContact, certifications, setCertifications,
            skills, setSkills, languages, setLanguages, handleAddField, handleInputChange, handleRemoveField, activeStep, setActiveStep, handleNext, handleBack,
            selectedFile, setSelectedFile, handleFileChange
        }}>
            {children}
        </TemplateContext.Provider>
    )
}