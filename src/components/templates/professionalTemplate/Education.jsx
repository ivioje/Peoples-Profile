import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import styles from "../../../style";

const Education = ({ formData, handleAddField, handleInputChange, handleRemoveField }) => (
    <section className="h-full w-full sm:p-4 p-0">
        {formData.map((data, index) => (
            <div key={index} className="shadow-md p-3 mt-3 border">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm">Education #{index + 1}</h2>
                    <div className="flex items-center justify-center p-1">
                        {formData.length <= 2 && (
                            <Button
                                type="button"
                                variant="text"
                                onClick={() => handleAddField("education")}
                                sx={{ background: "rgb(230, 230, 230)", fontSize: 14, textTransform: "capitalize", m: 0.5 }}
                            >
                                Add <BsPlus />
                            </Button>
                        )}
                        {formData.length !== 1 && (
                            <Button
                                type="button"
                                variant="text"
                                className={`${styles.flexCenter} p-1 rounded-lg m-1`}
                                onClick={() => handleRemoveField("education", index)}
                                sx={{ background: "rgb(230, 230, 230)", m: 0.5 }}
                            >
                                <FaMinus />
                            </Button>
                        )}
                    </div>
                </div>
                <form className={`${styles.flexCenter} flex-col p-2`}>
                    <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                        <div className="xs:w-1/2 w-full">
                            <label htmlFor={`institution${index}`}>INSTITUTION NAME</label>
                            <input
                                name="institution"
                                id={`institution${index}`}
                                placeholder="e.g Benson Idahosa University"
                                type="text"
                                value={data.institution}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                        <div className="xs:w-1/2 w-full">
                            <label htmlFor={`course${index}`}>FIELD OF STUDY</label>
                            <input
                                name="course"
                                id={`course${index}`}
                                placeholder="e.g computer science"
                                type="text"
                                value={data.course}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                    </div>
                    <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                        <div className="xs:w-1/2 w-full">
                            <label htmlFor={`qualification${index}`}>QUALIFICATION</label>
                            <input
                                name="qualification"
                                id={`qualification${index}`}
                                placeholder="e.g B.Sc"
                                type="text"
                                value={data.qualification}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                        <div className="xs:w-1/2 w-full">
                            <label htmlFor={`honours${index}`}>HONOURS</label>
                            <input
                                name="honours"
                                id={`honours${index}`}
                                placeholder="e.g first class"
                                type="text"
                                value={data.honours}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                    </div>
                    <div className={`${styles.flexBtw} xs:flex-row flex-col w-full`}>
                        <div className="xs:w-1/2 w-full">
                            <label htmlFor={`startDate${index}`}>START DATE</label>
                            <input
                                name="startDate"
                                id={`startDate${index}`}
                                placeholder="Year"
                                type="date"
                                value={data.startDate}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                        <div className={`xs:w-1/2 w-full flex ${data.isPresent ? "hidden" : "block"}`}>
                            <label htmlFor={`endDate${index}`}>END DATE</label>
                            <input
                                name="endDate"
                                id={`endDate${index}`}
                                placeholder="end date"
                                type={data.isPresent ? "text" : "date"}
                                value={data.isPresent ? "Present" : data.endDate}
                                onChange={event => handleInputChange("education", index, event)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex xs:items-end xs:justify-end">
                        <label
                            htmlFor={`item${index}`}
                            id={`item${index}`}
                            className="text-[14px] text-blue-900 mx-1 flex"
                        >
                            I currently study here
                            <input
                                id={`item${index}`}
                                type="checkbox"
                                className="mx-1 border h-[20px] w-[20px]"
                                name="check"
                                // checked={data.isPresent}
                                // onChange={() => handleCheckboxChange(index)}
                            />
                        </label>
                    </div>
                </form>
            </div>
        ))}
    </section>
);

Education.propTypes = {
    formData: PropTypes.array.isRequired,
    handleAddField: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleRemoveField: PropTypes.func.isRequired,
};

export default Education;
