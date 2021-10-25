import React from 'react';
import Nav from './Nav'
//import './App.css';
import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

const Wrapper = styled.div`
border:1px solid red;
min-height:100vh;
display: flex;
flex-direction:column;
`
const Main = styled.div`
  border:1px solid green;
  flex-grow:1;
  overflow:auto;
`


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function NoMatch(){
  return(
    <div>您请求的页面不存在</div>
  )
}
export default App;
