import React, { useContext } from 'react';
import { BsPlusCircle, BsXCircle } from 'react-icons/bs';
import { TemplateContext } from '../../../../context/TemplateContext';


const WorkExperience = () => {
    const { workExperience, handleAddField, handleInputChange, handleRemoveField } = useContext(TemplateContext)
    return (
        <div className=''>
            {workExperience.map((work, index) => (
                <div key={index} className="m-6 bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-medium">Work Experience #{index + 1}</h2>
                        <div className='flex items-center justify-center p-1'>
                            {workExperience.length !== 1 && (
                                <button
                                    type="button"
                                    className="text-[20px] m-1 text-red-500 focus:outline-none"
                                    onClick={() => handleRemoveField("workExperience", index)}
                                >
                                    <BsXCircle />
                                </button>
                            )}
                            {workExperience.length <= 9 && (
                                <button
                                    type="button"
                                    className="text-[20px] m-1 focus:outline-none"
                                    onClick={() => handleAddField("workExperience")}
                                >
                                    <BsPlusCircle />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor={`company${index}`} className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                id={`company${index}`}
                                value={work.company}
                                onChange={(event) => handleInputChange("workExperience", index, event)}
                                className="mt-1 p-3 focus:outline-dashed block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor={`position${index}`} className="block text-sm font-medium text-gray-700">
                                Position
                            </label>
                            <input
                                type="text"
                                name="position"
                                id={`position${index}`}
                                value={work.position}
                                onChange={(event) => handleInputChange("workExperience", index, event)}
                                className="mt-1 p-3 focus:outline-dashed block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor={`description${index}`} className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id={`description${index}`}
                                value={work.description}
                                onChange={(event) => handleInputChange("workExperience", index, event)}
                                className="mt-1 p-3 focus:outline-dashed block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor={`start${index}`} className="block text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="start"
                                id={`start${index}`}
                                value={work.startDate}
                                onChange={(event) => handleInputChange("workExperience", index, event)}
                                className="mt-1 p-1 outline-none block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor={`end${index}`} className="block text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="end"
                                id={`end${index}`}
                                value={work.endDate}
                                onChange={(event) => handleInputChange("workExperience", index, event)}
                                className="mt-1 p-1 outline-none"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkExperience