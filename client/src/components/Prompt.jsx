import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Prompt() {
  return (
    <Box
      component='form'
      sx={{
        "& > :not(style)": {
          m: 1,
          width: { xs: 90, sm: 100, md: 300, lg: 400, xl: 500 },
        },
      }}
      noValidate
      autoComplete='off'>
      <TextField
        focused
        id='standard-basic'
        label='Prompt'
        variant='standard'
        color='success'
      />
    </Box>
  );
}
