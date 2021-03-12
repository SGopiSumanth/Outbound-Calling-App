import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MakeCall from './components/MakeCall';
import ConnectedCall from './components/ConnectedCall';
import DisconnectedCall from './components/DisconnectedCall';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Outbound Calling Application
                   </p>
        </header>
      </div>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/make-call" component={MakeCall}></Route>
          <Route path="/connected-call" component={ConnectedCall}></Route>
          <Route path="/disconnected-call" component={DisconnectedCall}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
