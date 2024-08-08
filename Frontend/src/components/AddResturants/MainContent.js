// MainContent.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddressForm from '../AddResturants/AddressForm';
import Listview from '../ListComponet/Listview';
import Toolbar from '@mui/material/Toolbar';


const MainContent = ({handlenavigate}) => {
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
            <Grid container spacing={6} style={{ padding: '10px' }}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="div">
                        Add Restaurant
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{ padding: '20px 70px' }}>
                    <AddressForm handlenavigate={handlenavigate} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainContent;
