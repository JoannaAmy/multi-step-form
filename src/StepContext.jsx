import React, { createContext, useEffect, useReducer } from "react";
import App from "./App";

export const MultiStepContext = createContext();

const initialState = {
  currentStep: parseInt(localStorage.getItem("currentStep")) || 1,
  userData: JSON.parse(localStorage.getItem("userData")) || [],
  finalData: [],
  success: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "next_step":
      return { ...state, currentStep: state.currentStep + 1 };
    case "prev_step":
      return { ...state, currentStep: state.currentStep - 1 };
    case "set_step":
      return { ...state, currentStep: action.payload };
    case "update_field":
      return {
        ...state,
        userData: {
          ...state.userData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "submit":
      return {
        ...state,
        finalData: [...state.finalData, state.userData],
        userData: {},
        success: true,
      };
    default:
      return state;
  }
}

const StepContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state.userData));
    localStorage.setItem("currentStep", JSON.stringify(state.currentStep));
  }, [state.userData, state.currentStep]);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "submit",
    });
  };

  return (
    <>
      <MultiStepContext.Provider
        value={{
          currentStep: state.currentStep,
          userData: state.userData,
          finalData: state.finalData,
          success: state.success,
          dispatch,
          handleChange,
          handleSubmit,
        }}
      >
        <App></App>
      </MultiStepContext.Provider>
    </>
  );
};

export default StepContext;
