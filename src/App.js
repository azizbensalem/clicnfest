import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Commande from './Components/Pages/Commande';
import Invite from './Components/Pages//Invite';
import CreerEvent from './Components/Pages/CreateEvent';


function App() {
  return (
    <div>
      <Switch>
          <Route path='/clicnfest/create_event' component={CreerEvent} />
          <Route path='/clicnfest/invite' component={Invite} />
          <Route path='/clicnfest/commande' component={Commande} />
      </Switch>
    </div>
  );
}

export default App;
