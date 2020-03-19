import React from 'react';
import AppBar from '../../Components/Header/AppBar';
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