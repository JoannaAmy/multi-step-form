import React, { useContext } from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import { MultiStepContext } from "../StepContext";

export const SecondStep = () => {
  const { dispatch, userData, handleChange } = useContext(MultiStepContext);

  const cgpaClasses = [
    { value: "first_class", label: "First Class" },
    { value: "second_upper", label: "Second Class Upper" },
    { value: "second_lower", label: "Second Class Lower" },
    { value: "third_class", label: "Third Class" },
    { value: "pass", label: "Pass" },
  ];

  const level = [
    { value: "100_level", label: "100 Level" },
    { value: "200_level", label: "200 Level" },
    { value: "300_level", label: "300 Level" },
    { value: "400_level", label: "400 Level" },
    { value: "500_level", label: "500 Level" },
  ];

  const requiredFields = ["university", "course", "level", "cgpa_class"];

  const isFormIncomplete = () => {
    return requiredFields.some(
      (field) => !userData[field] || userData[field].toString().trim() === ""
    );
  };

  return (
    <>
      <div>
        <TextField
          name="university"
          label="College/University"
          margin="normal"
          required
          variant="outlined"
          color="secondary"
          value={userData["university"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <div>
        <TextField
          name="course"
          label="Course of Study"
          margin="normal"
          variant="outlined"
          required
          color="secondary"
          value={userData["course"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <div>
        <TextField
          select
          name="level"
          label="Select Level"
          required
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["level"] || ""}
          onChange={handleChange}
        >
          {level.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <TextField
          select
          label="Select your current CGPA"
          name="cgpa_class"
          variant="outlined"
          required
          margin="normal"
          color="secondary"
          value={userData["cgpa_class"] || ""}
          onChange={handleChange}
        >
          {cgpaClasses.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch({ type: "prev_step", payload: 1 })}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "next_step", payload: 2 })}
        disabled={isFormIncomplete()}
      >
        Next
      </Button>
    </>
  );
};
