
import Tags from 'views/Tags'
import Money from 'views/Money'
import Statistics from 'views/Statistics'
import NoMatch from 'views/NoMatch'
import {Tag} from 'views/Tag'


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
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
          <Tag/>
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/Statistics"> 
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
