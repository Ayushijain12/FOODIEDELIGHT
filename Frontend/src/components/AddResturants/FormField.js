// src/components/FormField.js
import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Grid } from '@mui/material';

const FormField = ({ id, name, label, type, placeholder, required, ...props }) => (
  <Grid item xs={12} md={6}>
    <FormLabel htmlFor={id} required={required}>
      {label}
    </FormLabel>
    <OutlinedInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={props.autoComplete}
      required={required}
      fullWidth
    />
  </Grid>
);

export default FormField;
