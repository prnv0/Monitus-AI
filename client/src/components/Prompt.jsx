import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Prompt({ newValue, string1, onChange }) {
  const handlePromptChange = (e) => {
    if (flag) {
      onChange(e.target.value);
      flag = false;
    }
    // Invoke the onChange callback with the updated value
    else {
      onChange = (e) => {
        handleValue();
        setDefaultValue(newValue);
      };
      flag = true;
    }
  };
  const [text, setText] = useState("Enter");
  const flag = false;

  const handleValue = () => {
    setText(() => {
      return newValue;
    });
  };
  useEffect(() => {
    handleValue();
  }, [newValue]);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: { xs: 90, sm: 100, md: 300, lg: 400, xl: 500 },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Prompt"
        variant="standard"
        color="success"
        type="text"
        id="string1"
        focused
        value={string1}
        defaultValue={"Enter"}
        onChange={handlePromptChange} // Handle the input change
      />
    </Box>
  );
}
