// src/components/AddressForm.js
import React from 'react';
import Grid from '@mui/material/Grid';
import FormField from './FormField';

const AddressForm = () => (
  <Grid container spacing={3} style={{ padding: '20px' }}>
    <FormField
      id="first-name"
      name="first-name"
      label="First name"
      type="text"
      placeholder="John"
      autoComplete="first name"
      required
    />
    <FormField
      id="last-name"
      name="last-name"
      label="Last name"
      type="text"
      placeholder="Snow"
      autoComplete="last name"
      required
    />
    <FormField
      id="address1"
      name="address1"
      label="Address line 1"
      type="text"
      placeholder="Street name and number"
      autoComplete="shipping address-line1"
      required
    />
    <FormField
      id="address2"
      name="address2"
      label="Address line 2"
      type="text"
      placeholder="Apartment, suite, unit, etc. (optional)"
      autoComplete="shipping address-line2"
    />
    <FormField
      id="city"
      name="city"
      label="City"
      type="text"
      placeholder="New York"
      autoComplete="City"
      required
    />
    <FormField
      id="state"
      name="state"
      label="State"
      type="text"
      placeholder="NY"
      autoComplete="State"
      required
    />
    <FormField
      id="zip"
      name="zip"
      label="Zip / Postal code"
      type="text"
      placeholder="12345"
      autoComplete="shipping postal-code"
      required
    />
    <FormField
      id="country"
      name="country"
      label="Country"
      type="text"
      placeholder="United States"
      autoComplete="shipping country"
      required
    />
  </Grid>
);

export default AddressForm;
