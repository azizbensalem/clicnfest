import React from 'react';
import AppBar from '../../Header/Navbar';
import Image from './Image';
import Choix from './Choix';
import Footer from '../../Footer/Footer';
import ScrollTop from '../../Footer/ScrollTop';


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