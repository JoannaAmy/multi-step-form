import React, { useState, createContext, useEffect } from "react";
import App from "./App";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(  () => {
    const savedStep = localStorage.getItem('currentStep')
    return savedStep ? JSON.parse(savedStep) : 
    1
  });
 


  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : {};
  });
  const [finalData, setFinalData] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({ ...data, [name]: value }));
  };

  function handleSubmit() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    // setCurrentStep(1)
    setSuccess(true);
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));

    localStorage.setItem('currentStep', JSON.stringify(currentStep))
  }, [userData, currentStep]);

  return (
    <>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          handleChange,
          handleSubmit,
          success,
        }}
      >
        <App></App>
      </MultiStepContext.Provider>
    </>
  );
};

export default StepContext;
