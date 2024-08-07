// MainContent.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddressForm from '../AddResturants/AddressForm'; 
import Toolbar from '@mui/material/Toolbar';


const MainContent = ({ openAddForm, handleOnChange }) => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Grid container spacing={6} style={{ padding: '20px' }}>
                <Grid item xs={6}>
                    <Typography variant="h4" component="div">
                        {openAddForm ? "Add Restaurant" : "Restaurants Lists"}
                    </Typography>
                    {openAddForm && <AddressForm />}
                </Grid>
                {!openAddForm && (
                    <Grid item xs={6} container justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleOnChange}>
                            <AddIcon style={{ margin: '5px' }} />
                            Add restaurant
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default MainContent;
