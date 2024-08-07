import React from 'react';
import { ThemeProvider, CssBaseline, Box, Toolbar } from '@mui/material';
import AppBarComponent from './AppBarComponent';
import DrawerComponent from './DrawerComponent';
import MainContent from './MainContent';
import defaultTheme from './defaultTheme'; // Assuming you have a defaultTheme

const MyApp = () => {

    const [open, setOpen] = React.useState(true);
    const [openAddForm, setOpenAddFrom] = React.useState(false);

    const user = localStorage.getItem('user');
    const UserArray = JSON.parse(user);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleOnChange = () => {
        setOpenAddFrom(!openAddForm);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarComponent
                    open={open}
                    toggleDrawer={toggleDrawer}
                    username={UserArray.username}
                />
                <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
                <MainContent openAddForm={openAddForm} handleOnChange={handleOnChange} />
            </Box>
        </ThemeProvider>
    );
};

export default MyApp;
