import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Messages from "./components/messages";
import ModPage from "./components/modpage";
import PostPage from "./components/postpage";
import ReportsPage from "./components/reportspage";
import PostPreview from "./components/postpreview";
import NotFound from "./components/notfound";
import Login from "./components/loginPage";
import Signup from "./components/signup";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/preview" component={PostPreview} />
            <Route path="/reports" component={ReportsPage} />
            <Route path="/messages" component={Messages} />
            <Route path="/post" component={PostPage} />
            <Route path="/mod" component={ModPage} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
