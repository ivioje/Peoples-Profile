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
import Certifications from './Certifications';
import Summary from './Summary';
import Languages from './Languages';

const ProfessionalProfile = () => {

  const { activeStep, handleBack, handleNext } = useContext(TemplateContext);

  const steps = ["Personal Details", "Work history", "Skills", "Education", "Certifications", "Professional summary", "Languages"];

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase font-bold'>personal details</h1>
            <PersonalDetails />
          </div>
        );
      case 1:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>Work history</h1>
            <WorkExperience />
          </div>
        );
      case 2:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>skills</h1>
            <Skills />
          </div>
        );
      case 3:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>education history</h1>
            <Education />
          </div>
        );
      case 4:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>Certifications</h1>
            <Certifications />
          </div>
        );
      case 5:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>professional summary</h1>
            <Summary />
          </div>
        );
      case 6:
        return (
          <div className='bg-white p-3'>
            <h1 className='uppercase'>Languages</h1>
            <Languages />
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  };


  return (
    <section className={`${styles.flexCenter} px-2 py-8 flex-col font-domine text-text_color`}>
      {/*header*/}
      <div className={`${styles.flexCenter} flex-col`}>
        <h1 className='font-firaSans sm:text-[36px] text-[23px] font-bold'>
          Professional Portfolio
        </h1>
        <p className='font-poppins text-[14px] sm:w-[500px] w-4/5 text-center my-2'>
          A template with a sleek and modern design for you to create a professional profile, with input fields for work experience, education, skills, personal details and contact information.
        </p>
      </div>

      {/*Stepper and Carousel*/}
      <div className="container">
        <div className='my-10 hidden sm:block'>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className='sm:hidden my-5 flex items-center justify-center mx-auto'>
          <MobileStepper
            variant="progress"
            steps={7}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 765, flexGrow: 1 }}
            style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}
          />
        </div>

        <div className=' bg-slate-50 m-4'>
          {activeStep !== steps.length ? (
            <div>
              <div className={` flex items-center justify-between relative inset-0`}>
                <div className=''>
                  <Button
                    className='absolute top-[150px] p-2 m-2 left-0 h-[50px] w-[50px] rounded-[100%]'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    <BsChevronLeft className='text-[25px]' />
                  </Button>
                </div>
                <div>
                  {activeStep === steps.length - 1 ?
                    <Button
                      disabled
                      color='info'
                      onClick={handleNext}
                      className='absolute top-[150px] p-2 m-2 right-0 border h-[50px] w-[50px] rounded-[100%]'
                    >
                      <BsChevronRight className='text-[25px]' />
                    </Button>
                    :
                    <Button
                      className='absolute top-[150px] p-2 m-2 right-0 border h-[50px] w-[50px] rounded-[100%]'
                      onClick={handleNext}>
                      <BsChevronRight className='text-[25px]' />
                    </Button>
                  }
                </div>
              </div>

              {/*Carousel content */}
              <div className='flex items-center justify-center flex-col'>
                <div className='sm:w-[80%] w-[90%] h-auto p-3 my-3'>
                  {getStepContent(activeStep)}
                </div>
              </div>
              {/*End of carousel content */}
            </div>
          ) : null}

          <div>
            {activeStep !== steps.length ? (

              <div className='flex items-center justify-center'>
                <div className='flex justify-between sm:w-[80%] w-[90%]'>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Save" : "Next"}
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProfessionalProfile