import React from 'react';
import axios from 'axios';
import AppBar from '../../Components/Header/Navbar';
import ScrollTop from '../../Components/Footer/ScrollTop';
import { Produits } from '../../Components/Produits';
import Boisson from '../../Images/Boissons.jpg';

export const Boissons = () => {
    return (
        <div>
            <AppBar />
            <Produits img={Boisson} name="Boissons" genre="boisson" value={2} />
            <ScrollTop />
        </div>
    );
};