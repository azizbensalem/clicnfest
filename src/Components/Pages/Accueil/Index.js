import React from 'react';
import AppBar from '../../Header/Navbar';
import Image from './Image';
import Choix from './Choix';
import Footer from '../../Footer/Footer';
import ScrollTop from '../../Footer/ScrollTop';
import { Plancom } from './PlanCom';
import { Theme } from './Theme';

export default function Home() {
    return (
      <div>
          <AppBar />
          <Image/> 
          <Choix/>
          <Theme />
          <Plancom />
          <ScrollTop />
          <Footer />
      </div>
    );
}