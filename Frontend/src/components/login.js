import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Paper } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { loginToEmp } from '../redux/authSlice';
import '../App.css';

const defaultTheme = createTheme();
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


export default function SignInSide() {

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handSubmit = async (values) => {
        if (values.email !== "" && values.password !== "") {
            try {
                const result = await dispatch(loginToEmp(values));
                const response = result.payload;

                if (response.message === "Login successful") {
                    alert(response.message);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    navigate('/dashboard');
                } else {
                    setOpen(true);
                    setMessage(response.error);
                }
            } catch (error) {
                setOpen(true);
                setMessage("Something Went Wrong!!")
            }
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url("/test.jpg")',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar alt="Remy Sharp" src="/test.jpg" />

                        <Typography component="h1" variant="h5">
                            Food App Administration
                        </Typography>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        name="email"
                                        as={TextField}
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        helperText={touched.email ? errors.email : ''}
                                        error={touched.email && Boolean(errors.email)}
                                    />
                                    <Field
                                        name="password"
                                        as={TextField}
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        helperText={touched.password ? errors.password : ''}
                                        error={touched.password && Boolean(errors.password)}
                                    />
                                    <Button sx={{
                                        backgroundColor: '#8B0000',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkblue',
                                        },
                                        margin: '10px 0'
                                    }} type="submit" variant="contained" fullWidth>
                                        Login
                                    </Button>

                                </Form>
                            )}
                        </Formik>
                    </Box>

                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => { setOpen(!open) }}
                key={{ vertical: "bottom" } + { horizontal: "right" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <Alert
                    onClose={() => { setOpen(!open) }}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}!
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}