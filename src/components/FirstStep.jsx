import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { MultiStepContext } from "../StepContext";

export const FirstStep = () => {
  const { userData, dispatch, handleChange } = useContext(MultiStepContext);

  const requiredFields = ["firstname", "lastname", "email", "phone"];

  const isFormIncomplete = () => {
    return requiredFields.some(
      (field) => !userData[field] || userData[field].toString().trim() === ""
    );
  };

  return (
    <>
      <div>
        <TextField
          name="firstname"
          label="First Name"
          required
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["firstname"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <div>
        <TextField
          name="lastname"
          label="Last Name"
          required
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["lastname"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <div>
        <TextField
          name="email"
          label="Email"
          required
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["email"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <div>
        <TextField
          name="phone"
          label="Phone"
          required
          type="tel"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["phone"] || ""}
          onChange={handleChange}
        ></TextField>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "set_step", payload: 2 })}
        disabled={isFormIncomplete()}
      >
        Next
      </Button>
    </>
  );
};
