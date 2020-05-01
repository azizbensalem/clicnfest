import React from 'react';
import AppBar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import ScrollTop from '../../Footer/ScrollTop';
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