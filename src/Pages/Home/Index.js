import React from 'react';
import AppBar from '../../Components/Header/Navbar';
import Image from './Image';
import Choix from './Choix';

export default function Home() {
    return (
      <div>
          <AppBar />
          <Image/> 
          <Choix/>
      </div>
    );
}