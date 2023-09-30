import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Patients = [
  "Akhil Binoy Vettical",
  "Pranav Sathish",
  "Sreehari S",
  "Richard Jopseph",
  "StuartLittle",
];
export default function Dropbox({ onDropdownChange }) {
  const handleDropdownChange = (event, value) => {
    onDropdownChange(value); // Pass the selected value back to the parent component
  };
  return (
    <Autocomplete
      disablePortal
      options={Patients}
      sx={{ width: { sm: 100, md: 200, lg: 250, xl: 350 } }}
      onChange={handleDropdownChange}
      renderInput={(params) => (
        <TextField {...params} label='Patient' color='success' focused />
      )}
    />
  );
}
