import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import history from '../browserHistory';
import Project from '../Project';
import './fontStyles.css';
// import { BoardName } from '../Project/Board/Header/Styles';
import ProjectBoard from '../Project/Board';
import ProjectIssueCreate from '../Project/IssueCreate';
import ProjectNavbarLeft from '../Project/NavbarLeft';
import ProjectSidebar from '../Project/Sidebar';

const App = () => (
  <Fragment>
    {/* <ProjectNavbarLeft/> */}
    {/* <ProjectSidebar/> */}
    {/* <ProjectIssueCreate/> */}
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    
    <Router history={history}>
    <Switch>
      {/* <ProjectBoard/> */}
      <Project/>
      {/* <Redirect exact from="/" to="/project" /> */}
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      <Route path="/project" component={Project} />
      {/* <Route path="/create"  ><ProjectIssueCreate /></Route> */}
      {/* <Route component={PageError} /> */}
    </Switch>
  </Router>
    {/* <Routes />
     */}
  </Fragment>
);

export default App;
