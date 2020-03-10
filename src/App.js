import React from 'react';
import './App.css';
import AppBar from './Components/Header/AppBar';
import Card from './Components/Body/EventCreation/Card';
import EventCreation from "./Components/Body/EventCreation/EventCreation";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Route path="/abc" component={EventCreation} /> */}
        <AppBar />
        <Card />
      </BrowserRouter>
    </div>
  );
}

export default App;
