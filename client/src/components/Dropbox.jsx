import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Patients = [
  "Akhil Binoy Vettical",
  "Pranav Sathish",
  "Sreehari S",
  "Richard Jopseph",
];
export default function Dropbox() {
  return (
    <Autocomplete
      disablePortal
      options={Patients}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label='Patient' color='success' focused />
      )}
    />
  );
}
