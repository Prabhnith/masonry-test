import React, { Component } from 'react';
import Masonry from './Components/Masonry/Masonry';
import DisplayDiv from './Components/DisplayDiv/DisplayDiv';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Masonry} />
          <Route path="/open/:ID" component={DisplayDiv} />
        </div>
      </Router>
    );
  }
}

export default App;
