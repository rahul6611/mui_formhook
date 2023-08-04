'use client'

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email format'),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref('email'), null], 'Emails do not match')
      .required('Confirm Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('Confirm Password is required'),
    name: yup.string().required('Name is required'),
    country: yup.string().required('Country is required'),
  });

const RegistrationForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      )}
    />

    <Controller
      name="confirmEmail"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Confirm Email"
          error={!!errors.confirmEmail}
          helperText={errors.confirmEmail?.message}
        />
      )}
    />

    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      )}
    />

    <Controller
      name="confirmPassword"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type="password"
          label="Confirm Password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      )}
    />

    <Controller
      name="name"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      )}
    />

    <Controller
      name="country"
      control={control}
      render={({ field }) => (
        <FormControl error={!!errors.country} fullWidth variant="outlined">
          <InputLabel>Country</InputLabel>
          <Select {...field} label="Country">
            <MenuItem value="country1">Country 1</MenuItem>
            <MenuItem value="country2">Country 2</MenuItem>
            {/* Add more countries as needed */}
          </Select>
          {errors.country && <div>{errors.country.message}</div>}
        </FormControl>
      )}
    />

    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </form>
  );
};

export default RegistrationForm;
