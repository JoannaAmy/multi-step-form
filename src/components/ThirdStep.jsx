import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { MultiStepContext } from "../StepContext";

export const ThirdStep = () => {
  const { setCurrentStep, userData, handleSubmit, handleChange, success } =
    useContext(MultiStepContext);

      const requiredFields = ["firstname", "lastname", "email", "phone", "reason","university", "course", "level", "cgpa_class" ];
      
        const isFormIncomplete = () => {
        return requiredFields.some(
          (field) => !userData[field] || userData[field].toString().trim() === ""
        );
      };
  return (
    <>
      <div>
        <TextField
          name="reason"
          label="Why do you need this scholarship"
          multiline
          required
          rows={10}
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["reason"] || ""}
          onChange={handleChange}
          // style={{
          //   paddingBottom:'500px'
          // }}
        ></TextField>
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCurrentStep(2)}
      >
        Back
      </Button>
      <span></span>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
        disabled={isFormIncomplete()}
      >
        Submit
      </Button>

      {success && (
        <p style={{ textAlign: "center" }}>
          Submitted successfully,{" "}
          <a href="#" onClick={() => setCurrentStep(1)}>
            submit another response
          </a>
        </p>
      )}
    </>
  );
};
