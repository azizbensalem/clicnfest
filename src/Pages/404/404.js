import React from 'react';
import AppBar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollTop from '../../Components/Footer/ScrollTop';
import { Typography } from '@material-ui/core';


export default function Error() {
    return (
        <div>
            <AppBar />
            <Typography 
            variant="h4"
            style={{ 
                textAlign: 'center',
                paddingTop: '40vh',
                paddingBottom: '45vh',
            }}
            >404 ERROR NOT FOUND</Typography>
            <ScrollTop />
            <Footer />
        </div>
    );
}