import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import StandingsList from './components/StandingList';

function App() {
  return (
    <Router>
      <Route path="/" exact component={StandingsList} />
    </Router>
  );
}

export default App;
