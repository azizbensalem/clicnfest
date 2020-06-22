import React from 'react';
import axios from 'axios';
import AppBar from '../../Components/Header/Navbar';
import ScrollTop from '../../Components/Footer/ScrollTop';
import {Produits} from '../../Components/Produits';
import Lieu from '../../Images/Lieux.png';

export const Lieux = () => {
    return (
        <div>
            <AppBar />
            <Produits img={Lieu} name="Lieux" genre="lieux" value={0} />
            <ScrollTop />
        </div>
    );
};