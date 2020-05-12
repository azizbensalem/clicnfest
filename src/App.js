import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Invite from './Components/Pages/Participants/Participants';
import CreerEvent from './Components/Pages/CreateEvent/CreateEvent';
import Home from './Components/Pages/Accueil/Index';
import Login from './Components/Pages/Login/Login';
import { Show } from './Components/Pages/Profil/Show';
import { Modifier } from './Components/Pages/Profil/Modifier';
import { Password } from './Components/Pages/Profil/Password';
import Inscription from './Components/Pages/Inscription/Inscription';
import MyEvent from './Components/Pages/MesEvents/MyEvent';
import Linprog from './Components/Linprog';
import { Cart } from './Components/Pages/Confirmation/Cart';
import { Lieux } from './Components/Pages/Lieux/Lieux';
import { Menus } from './Components/Pages/Menus/Menus';
import { Boissons } from './Components/Pages/Boissons/Boissons';
import { Extras } from './Components/Pages/Extras/Extras';
import { Communication } from './Components/Pages/Communication/Communication';
import Error from './Components/Pages/404/404';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { useDispatch, useSelector } from "react-redux";


export default function App() {
 const [state, setState] = React.useState(true);
 const items = useSelector(state => state.addedItems);
 React.useEffect(() =>{
    localStorage.setItem('item', JSON.stringify(items));
    setTimeout(() => {
      setState(false)
    }, 3000);
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/evenements/organisation" component={CreerEvent} />
        {state ? <Linprog /> : null}
        <Route exact path="/evenements/commande" component={Cart} />
        <Route exact path="/evenements/lieux" component={Lieux} />
        <Route exact path="/evenements/menus" component={Menus} />
        <Route exact path="/evenements/boissons" component={Boissons} />
        <Route exact path="/evenements/communication" component={Communication} />
        <Route exact path="/evenements/extras" component={Extras} />
        <Route exact path="/evenements/participants" component={Invite} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/monprofil" component={Show} />
        <Route exact path="/monprofil/modifier" component={Modifier} />
        <Route exact path="/monprofil/password" component={Password} />
        <Route exact path="/mes_evenements" component={MyEvent} />
        <Route exact path="/accueil" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}