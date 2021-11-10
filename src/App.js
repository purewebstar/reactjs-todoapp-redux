import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () =>{
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path='/' component={Home}  />
            <Route path='/home' component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
