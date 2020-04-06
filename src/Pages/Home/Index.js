import React from 'react';
import AppBar from '../../Components/Header/Navbar';
import Image from './Image';
import Choix from './Choix';
import Footer from '../../Components/Footer/Footer';
import ScrollTop from '../../Components/Footer/ScrollTop';


export default function Home() {
    return (
      <div>
          <AppBar />
          <Image/> 
          <Choix/>
          <ScrollTop />
          <Footer />
      </div>
    );
}