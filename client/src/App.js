import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import StandingsList from './components/standings.component'

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Route path="/" exact component={StandingsList} />
      </div>
    </Router>
  );
}

export default App;
