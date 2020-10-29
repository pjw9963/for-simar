import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Messages from './components/messages'
import ModPage from './components/modpage'
import PostPage from './components/postpage';
import ReportsPage from './components/reportspage';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path='/reports' component={ReportsPage} />
          <Route path='/messages' component={Messages} />
          <Route path='/post' component={PostPage} />
          <Route path='/mod' component={ModPage} />
          <Route exact path='/' component={Home} />
          </Switch>
      </Router>        
      </div>
    );
  }
}

export default App;

