import React, { useContext } from 'react';
import styles from '../../../../style';
import WorkExperience from './WorkExperience';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stepper, Step, StepLabel, Button, MobileStepper } from "@mui/material";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { TemplateContext } from '../../../../context/TemplateContext';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Education from './Education';
import Summary from './Summary';
import { Link } from 'react-router-dom';

const ProfessionalProfile = () => {

  const { activeStep, handleBack, handleNext, personalDetails, workExperience, education, skillContent, setIsPresent,
    setSkillContent, summaryContent, setSummaryContent, handleAddField, handleInputChange, handleRemoveField,
  } = useContext(TemplateContext);

  const steps = ["Personal Details", "Work history", "Skills", "Education", "Professional summary"];

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase font-bold'>personal details</h1>
            <PersonalDetails
              formData={personalDetails}
              handleInputChange={handleInputChange}
            />
          </div>
        );
      case 1:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>Work history</h1>
            <WorkExperience
              formData={workExperience}
              handleAddField={handleAddField}
              handleInputChange={handleInputChange}
              handleRemoveField={handleRemoveField}
              setIsPresent={setIsPresent}
            />
          </div>
        );
      case 2:
        return (
          <div className={`bg-white p-5`}>
            <h1 className='uppercase'>skills</h1>
            <h4 className='py-1 text-[14px]'>List out your skills below to stand out</h4>
            <Skills skillContent={skillContent} setSkillContent={setSkillContent} />
          </div>
        );
      case 3:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>education history</h1>
            <Education
              formData={education}
              handleAddField={handleAddField}
              handleRemoveField={handleRemoveField}
              handleInputChange={handleInputChange}
            />
          </div>
        );
      case 4:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>professional summary</h1>
            <Summary
              summaryContent={summaryContent}
              setSummaryContent={setSummaryContent}
            />
          </div>
        );
      default:
        return "View your profile";
    }
  };


  return (
    <section className={`${styles.flexCenter} px-2 py-8 flex-col font-domine text-text_color`}>
      {/*header*/}
      <div className={`${styles.flexCenter} flex-col`}>
        <h1 className='font-firaSans sm:text-[36px] text-[23px] font-bold'>
          Professional Portfolio
        </h1>
        <p className='font-poppins text-[14px] sm:w-[500px] w-full text-center my-2'>
          A template with a sleek and modern design for you to create a professional profile, with input fields for work experience, education, skills, personal details and contact information.
        </p>
      </div>

      {/*Stepper and Carousel*/}
      <div className="sm:w-[90%] w-full sm:m-3 m-1 ">
        {activeStep === steps.length ? (
          <div className={`w-full ${styles.flexCenter} flex-col my-6 mx-2`}>
            <h1>You have completed your professional profile.</h1>
            <div className={`${styles.flexBtw} w-[200px] text-dimWhite mt-8`}>
              <Link to='finished-template'>
                <button className='bg-slate-900 px-4 py-2'>View</button>
              </Link>
              <button className='bg-slate-900 px-4 py-2' onClick={() => window.location.reload()}>
                Edit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className='my-10 hidden sm:block'>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label} >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>

            <div className='sm:hidden my-5 flex items-center justify-center mx-auto'>
              <MobileStepper
                variant="dots"
                steps={5}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}
                nextButton={
                  activeStep === steps.length - 1 ?
                    <Button
                      disabled
                      variant=''
                      onClick={handleNext}
                    >
                      <BsChevronRight className='sm:text-[25px] text-[20px]' />
                    </Button>
                    :
                    <Button
                      onClick={handleNext} variant=''>
                      <BsChevronRight className='sm:text-[25px] text-[20px]' />
                    </Button>
                }
                backButton={
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant=''
                  >
                    <BsChevronLeft className='sm:text-[25px] text-[20px]' />
                  </Button>
                }
              />
            </div>
          </div>
        )}

        <div className=' bg-slate-50 sm:m-4 pb-5'>
          {activeStep !== steps.length ? (
            <div>
              <div className={`sm:flex hidden items-center justify-between relative inset-0`}>
                <div className=''>
                  <Button
                    className='absolute top-[150px] h-[50px] w-[50px] p-2 m-2 left-0 rounded-[100%]'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant=''
                  >
                    <BsChevronLeft className='sm:text-[25px] text-[20px]' />
                  </Button>
                </div>
                <div className=''>
                  {activeStep === steps.length - 1 ?
                    <Button
                      disabled
                      variant=''
                      onClick={handleNext}
                      className='absolute top-[150px] p-2 m-2 right-0 border h-[50px] w-[50px] rounded-[100%]'
                    >
                      <BsChevronRight className='sm:text-[25px] text-[20px]' />
                    </Button>
                    :
                    <Button
                      className='absolute top-[150px] p-2 m-2 right-0 border h-[50px] w-[50px] rounded-[100%]'
                      onClick={handleNext} variant=''>
                      <BsChevronRight className='sm:text-[25px] text-[20px]' />
                    </Button>
                  }
                </div>
              </div>

              {/*Carousel content */}
              <div className='flex items-center justify-center flex-col'>
                <div className='sm:w-[90%] w-full h-auto p-3 sm:my-3'>
                  {activeStep === activeStep ? getStepContent(activeStep) : 'Finished'}
                </div>
              </div>
              {/*End of carousel content */}
            </div>
          ) : null}

          <div>
            {activeStep !== steps.length ? (

              <div className='flex items-center justify-center'>
                <div className='flex justify-between sm:w-[80%] w-[90%]'>
                  <Button
                    disabled={activeStep === 0}
                    style={{ 'textTransform': 'capitalize', 'fontWeight': 'bold' }}
                    onClick={handleBack}>
                    Back
                  </Button>

                  {activeStep === steps.length - 1 ? (
                    <div>
                      <Link to='finished-template'>
                        <Button
                          variant="contained"
                          style={{ 'textTransform': 'capitalize', 'background': '#171F3A', 'color': 'whitesmoke', 'fontWeight': 'bold' }}
                          onClick={handleNext}
                        >
                          Finish
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Button
                        variant="contained"
                        style={{ 'textTransform': 'capitalize', 'background': '#171F3A', 'color': 'whitesmoke', 'fontWeight': 'bold' }}
                        onClick={handleNext}
                      >
                        Save & Next
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section >
  )
}

export default ProfessionalProfile