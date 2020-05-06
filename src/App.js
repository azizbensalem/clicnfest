import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Invite from './Components/Pages/Participants/Participants';
import CreerEvent from './Components/Pages/CreateEvent/CreateEvent';
import Home from './Components/Pages/Accueil/Index';
import Login from './Components/Pages/Login/Login';
import Profil from './Components/Pages/Profil/Index';
import Inscription from './Components/Pages/Inscription/Inscription';
import MyEvent from './Components/Pages/MesEvents/MyEvent';
import Linprog from './Components/Linprog';
import { Cart } from './Components/Pages/Confirmation/Cart';
import { Lieux } from './Components/Pages/Lieux/Lieux';
import { Menus } from './Components/Pages/Menus/Menus';
import { Boissons } from './Components/Pages/Boissons/Boissons';
import { Extras } from './Components/Pages/Extras/Extras';
import Error from './Components/Pages/404/404';
import {ProtectedRoute} from './Components/ProtectedRoute';


export default function App() {
 const [state, setState] = React.useState(true);

 React.useEffect(() =>{
    setTimeout(() => {
      setState(false)
    }, 3000);
  });

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/evenements/organisation" component={CreerEvent} />
        {state ? <Linprog /> : null}
        <ProtectedRoute exact path="/evenements/commande" component={Cart} />
        <ProtectedRoute exact path="/evenements/lieux" component={Lieux} />
        <ProtectedRoute exact path="/evenements/menus" component={Menus} />
        <ProtectedRoute exact path="/evenements/boissons" component={Boissons} />
        <ProtectedRoute exact path="/evenements/extras" component={Extras} />
        <ProtectedRoute exact path="/evenements/participants" component={Invite} />
        <ProtectedRoute exact path="/inscription" component={Inscription} />
        <ProtectedRoute exact path="/monprofil" component={Profil} />
        <ProtectedRoute exact path="/mes_événements" component={MyEvent} />
        <ProtectedRoute exact path="/accueil" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}