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
class App extends React.Component {

  state = {
    loading : true
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000);
  }
  
  render() {
  return (
    <div>
      <Switch>
        <Route exact path="/evenements/organisation" component={CreerEvent} />
        {this.state.loading ? <Linprog /> : null}
        <Route exact path="/evenements/commande" component={Cart} />
        <Route exact path="/evenements/lieux" component={Lieux} />
        <Route exact path="/evenements/menus" component={Menus} />
        <Route exact path="/evenements/boissons" component={Boissons} />
        <Route exact path="/evenements/extras" component={Extras} />
        <Route exact path="/evenements/participants" component={Invite} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/monprofil" component={Profil} />
        <Route exact path="/mes_événements" component={MyEvent} />
        <Route exact path="/accueil" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}
}

export default App;
