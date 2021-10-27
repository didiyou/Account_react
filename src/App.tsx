import React from 'react';
import Nav from './components/Nav'
import Tags from 'views/Tags'
import Tags from 'views/Money'
import Tags from 'views/Statistics'
import Tags from 'views/NoMatch'

import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      
        <Switch>
        <Redirect exact from="/" to="/money" />
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/Statistics"> 
            <Statistics />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        
    </Router>
  );
}








export default App;
