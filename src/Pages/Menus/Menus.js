import React from 'react';
import axios from 'axios';
import AppBar from '../../Components/Header/Navbar';
import ScrollTop from '../../Components/Footer/ScrollTop';
import { Produits } from '../../Components/Produits';
import Menu from '../../Images/Menus.png';

export const Menus = () => {
    return (
        <div>
            <AppBar />
            <Produits img={Menu} name="Menus" genre="menu" value={1} />
            <ScrollTop />
        </div>
    );
};