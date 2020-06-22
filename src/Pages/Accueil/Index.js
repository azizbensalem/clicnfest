import React from 'react';
import AppBar from '../../Components/Header/Navbar';
import Image from './Image';
import Choix from './Choix';
import Footer from '../../Components/Footer/Footer';
import ScrollTop from '../../Components/Footer/ScrollTop';
import { Plancom } from './PlanCom';
import { Formulaire } from "./Formulaire";
import { Concept } from "./Concept";


export default function Home() {
    return (
      <div>
          <AppBar />
          <Image/>
          <Formulaire />
          <Choix />
          <Concept />
          <Plancom />
          <ScrollTop />
          <Footer />
      </div>
    );
}