import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import   Login   from "./componets/login-component";
import   SignUp  from "./componets/signup-component";

function App() {

  return (
    
    <Router>
      <div className="App">
          <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {/* <Link className="nav-link" to={"/sign-in"}>Sign in</Link>  */}
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to={"/sign-up"}>Sign up</Link> */}
                </li>
              </ul>
            </div>
          </div>
    
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/login' component={Login} />
              {/* <Route path="/sign-in" component={Login} /> */}
              <Route path="/sign-up" component={SignUp} />
            </Switch> 
          </div>
        </div>
      </div> 
    </Router>  
  );
}

export default App;
