import React from 'react';
import Nav from './components/Nav'
import Tags from 'views/Tags'
import Money from 'views/Money'
import Statistics from 'views/Statistics'
import NoMatch from 'views/NoMatch'

import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

const AppWrapper = styled.div`
color:#333'
`


function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}








export default App;
