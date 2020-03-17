import React from 'react';
import Slideshow from './Slideshow';
import AppBar from '../../Components/Header/AppBar';


export default function Home() {
    return (
      <div>
          <AppBar />
          <Slideshow />
      </div>
    );
}