import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Index from './Pages/CreerEvent/Commande/Index';
import Invite from './Pages/CreerEvent/Participants/Participants';
import CreerEvent from './Pages/CreerEvent/CreateEvent/CreateEvent';
import Home from './Pages/Home/Index';
import Login from './Pages/Login/Login';
import Profil from './Pages/Profil/Index';
import Inscription from './Pages/Inscription/Inscription';
import MyEvent from './Pages/MyEvent/MyEvent';
import Linprog from './Components/Linprog';
// import { TransitionGroup, CSSTransition } from "react-transition-group";



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
        <Route exact path="/create_event" component={CreerEvent} />
        {this.state.loading ? <Linprog /> : null}
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/commande" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/monprofil" component={Profil} />
        <Route exact path="/mes_événements" component={MyEvent} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="*" component={ () => "404 ERROR NOT FOUND"} />
      </Switch>
    </div>
  );
}
}

export default App;
