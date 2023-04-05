import React, { useContext } from 'react';
import { BsCloudMinus, BsFileMinus, BsNodeMinus, BsPlus, BsPlusCircle, BsX, BsXCircle } from 'react-icons/bs';
import { TemplateContext } from '../../../../context/TemplateContext';


const WorkExperience = () => {
    const { workExperience, handleAddField, handleInputChange, handleRemoveField } = useContext(TemplateContext)
    return (
        <div className=''>
            <div className="">
                <header className="py-6 px-8">
                    <h1 className="text-2xl font-bold text-gray-700">Professional Profile</h1>
                </header>
                <main className="px-8 py-4">
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Work Experience</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">
                                Company
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="company" name="company" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="position">
                                Position
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="position" name="position" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea className="w-full py-2 px-4 border rounded-md" id="description" name="description"></textarea>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Education</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="institution">
                                Institution
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="institution" name="institution" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="degree">
                                Degree
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="degree" name="degree" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="fieldOfStudy">
                                Field of Study
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="fieldOfStudy" name="fieldOfStudy" />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Skills</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="skill">
                                Skill
                            </label>
                            <input className="w-full py-2 px-4 border rounded-md" type="text" id="skill" name="skill" />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Certifications</h2>
                    </section>
                </main>
            </div>





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
                                    <BsX />
                                </button>
                            )}
                            {workExperience.length <= 9 && (
                                <button
                                    type="button"
                                    className="text-[20px] m-1 focus:outline-none"
                                    onClick={() => handleAddField("workExperience")}
                                >
                                    <BsPlus />
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
            <div>
                {workExperience.map((work, index) => (
                    <div key={index + 1}>
                        <h1>Company</h1>
                        <p>{work.company}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default WorkExperience