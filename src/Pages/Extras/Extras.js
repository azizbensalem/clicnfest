import React from 'react';
import axios from 'axios';
import AppBar from '../../Components/Header/Navbar';
import ScrollTop from '../../Components/Footer/ScrollTop';
import { Produits } from '../../Components/Produits';
import Extra from '../../Images/Extras.png';

export const Extras = () => {
    return (
        <div>
            <AppBar />
            <Produits img={Extra} name="Extras" genre="extra" value={3} />
            <ScrollTop />
        </div>
    );
};