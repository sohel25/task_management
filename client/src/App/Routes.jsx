import React from 'react';
import { Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import history from '../browserHistory';
import Project from '../Project';
import Authenticate from '../Auth/Authenticate';
import PageError from '../shared/components/PageError';
import ProjectIssueCreate from '../Project/IssueCreate';

const Routes = () => (
  <BrowserRouter>
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      <Route exact path="/project" component={Project} />
      <Route eaxct path="/create" component={ProjectIssueCreate} />
      {/* <Route component={PageError} /> */}
    </Switch>
  </Router>
  </BrowserRouter>

);

export default Routes;
