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
          <Route path='/create_event' component={CreerEvent} />
          <Route path='/invite' component={Invite} />
          <Route path='/commande' component={Commande} />
      </Switch>
    </div>
  );
}

export default App;
