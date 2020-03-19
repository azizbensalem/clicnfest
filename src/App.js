import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Index from './Pages/CreerEvent/Commande/Index';
import Invite from './Pages/CreerEvent/Invités/Invite';
import CreerEvent from './Pages/CreerEvent/CreateEvent/CreateEvent';
import Home from './Pages/Home/Index';
import Login from './Pages/Login/Login';
import Inscription from './Pages/Inscription/Inscription';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/create_event" component={CreerEvent} />
        <Route path="/invite" component={Invite} />
        <Route path="/commande" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/inscription" component={Inscription} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={ () => "404 ERROR NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
