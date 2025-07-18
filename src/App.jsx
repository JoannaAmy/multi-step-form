import React, {useContext} from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { MultiStepContext  } from "./StepContext";

const App = () => {
const { currentStep} = useContext(MultiStepContext)

  function showCurrentStep(step) {
    if (step === 1) {
      return <FirstStep />;
    }
    if (step === 2) {
      return <SecondStep />;
    }
    if (step === 3) {
      return <ThirdStep />;
    }
  }

  return (
    <>
    <div className="form-card">

    <h3>Scholarship Form For University Students</h3>
    
      <Stepper
        style={{ width: "100%", marginBottom: '3rem' }}
        activeStep={currentStep -1}
        orientation="horizontal"
        alternativeLabel
      >
        <Step>
          <StepLabel>Personal Information</StepLabel>
        </Step>

        <Step>
          <StepLabel>Educational Information</StepLabel>
        </Step>

        <Step>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
      <p> <span>NOTE:</span> Please fill every section of this form correctly</p>
      {showCurrentStep(currentStep)}
    </div>

    </>
  );
};

export default App;
