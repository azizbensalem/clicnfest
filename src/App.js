import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Pages/Accueil/Index';
import Login from './Pages/Login/Login';
import { Show } from './Pages/Profil/Show';
import { Modifier } from './Pages/Profil/Modifier';
import { Password } from './Pages/Profil/Password';
import Inscription from './Pages/Inscription/Inscription';
import MyEvent from './Pages/MesEvents/MyEvent';
import Linprog from './Components/Linprog';
import { Commande } from './Pages/Confirmation/ContentCom';
import { Lieux } from './Pages/Lieux/Lieux';
import { Billetterie } from './Pages/Billetterie/Billetterie';
import { Menus } from './Pages/Menus/Menus';
import { Boissons } from './Pages/Boissons/Boissons';
import { Extras } from './Pages/Extras/Extras';
import { Communication } from './Pages/Communication/Communication';
import { Organisation }  from './Pages/CreateEvent/Index';
import { Participants } from './Pages/Participants/Index';
import { Events } from './Pages/Events/Events';
import Error from './Pages/404/404';
import { useSelector } from "react-redux";
import auth from './Components/Auth';



export default function App() {
 const [state, setState] = React.useState(true);
 React.useEffect(() =>{
    setTimeout(() => {
      setState(false)
    }, 3000);
  });
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App">
      {user && user.token ? (
        <Switch>
          {state ? <Linprog /> : null}
          <Route exact path="/accueil" component={Home} />
          <Route exact path="/evenements/" component={Events} />
          <Route
            exact
            path="/evenements/organisation"
            component={Organisation}
          />
          <Route exact path="/evenements/billetterie" component={Billetterie} />
          <Route exact path="/evenements/commande" component={Commande} />
          <Route exact path="/evenements/lieux" component={Lieux} />
          <Route exact path="/evenements/menus" component={Menus} />
          <Route exact path="/evenements/boissons" component={Boissons} />
          <Route
            exact
            path="/evenements/communication"
            component={Communication}
          />
          <Route exact path="/evenements/extras" component={Extras} />
          <Route
            exact
            path="/evenements/participants"
            component={Participants}
          />
          <Route exact path="/monprofil" component={Show} />
          <Route exact path="/monprofil/modifier" component={Modifier} />
          <Route exact path="/monprofil/password" component={Password} />
          <Route exact path="/mes_evenements" component={MyEvent} />
          <Route exact path="/404" component={Error} />
          <Redirect path="/" to="/accueil" />
        </Switch>
      ) : (
        <Switch>
          {state ? <Linprog /> : null}
          <Route exact path="/accueil" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/inscription" component={Inscription} />
          <Redirect path="*" to="/" />
        </Switch>
      )}
    </div>
  );
}