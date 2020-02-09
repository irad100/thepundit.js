import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={StandingsList} />
      </div>
    </Router>
  );
}

export default App;
