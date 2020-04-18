import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Index from './Components/Pages/CreerEvent/Commande/Index';
import Invite from './Components/Pages/CreerEvent/Participants/Participants';
import CreerEvent from './Components/Pages/CreerEvent/CreateEvent/CreateEvent';
import Home from './Components/Pages/Home/Index';
import Login from './Components/Pages/Login/Login';
import Profil from './Components/Pages/Profil/Index';
import Inscription from './Components/Pages/Inscription/Inscription';
import MyEvent from './Components/Pages/MyEvent/MyEvent';
import Linprog from './Components/Linprog';
import { Cart } from './Components/Pages/Cart';

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
    {/* <Provider store={store}> */}
      <Switch>
        <Route exact path="/create_event" component={CreerEvent} />
        {this.state.loading ? <Linprog /> : null}
        <Route exact path="/cart" component={Cart} />
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
    {/* </Provider> */}
    </div>
  );
}
}

export default App;
