import React,{useState} from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import drafts from './data.json';
import Header from './Header';
import DraftCard from './DraftCard';
import LoginForm from './LoginForm';
import LoginFormS from './Stakeholder LoginForm';
import User from './User';
import CoverageMap from './CoverageMap';
import VisChart from './VisChart';
import Recharts from './Recharts';
import Recharts2 from './Recharts2';

function App() {
  const [isOrdered,setOrdered] =useState(false);

  const handleSend=()=>{
    setOrdered(true);
    
    // setTimeout(()=>{
    //   setOrdered(false);
    // },3000);
  }
  return (
    <Router>
    <Header isOrdered={isOrdered} onClose={()=>setOrdered(false)}/>
    <Container>
      <Switch>
        <Route path="/home">
          <DraftCard drafts={drafts} send={handleSend}/>
        </Route>
        <Route path="/user">
          <User/>
        </Route>
        <Route path="/logout">
          <LoginForm/>
        </Route>
        <Route path="/login-stakeholder">
          <LoginFormS/>
        </Route>
        <Route path="/coverage-map">
          <CoverageMap/>
        </Route>
        <Route path="/vis-chart">
          <VisChart/>
        </Route>
        <Route path="/recharts">
          <Recharts/>
        </Route>
        <Route path="/recharts-2">
          <Recharts2/>
        </Route>
        <Route path="/">
          <DraftCard drafts={drafts} send={handleSend}/>
        </Route>
      </Switch>
    </Container>
    </Router>

    // <Container>      
    //   <Header isOrdered={isOrdered} onClose={()=>setOrdered(false)}/>
    //   {false ?
    //       <LoginForm/>
    //   :<DraftCard drafts={drafts} send={handleSend}/>}
    // </Container>

  );
}

export default App;
