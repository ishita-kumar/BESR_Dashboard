import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Mainpage from "./Components/Mainpage"
import povertyMainpage from "./Components/PovertyData/povertymainpage"
import CensusMainpage from "./Components/CensusTracts/censusmainpage"
function App() {
  return (
    <div className="App">
       <Router>
        <div>
        <aside className="side-nav" id="show-side-navigation1">
          <i className="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"></i>
          <div className="heading">

            <div className="info">
              <h2>BESR</h2>
            </div>
          </div>
        
          <ul className="categories">
          <li>
          <FontAwesomeIcon icon={faCheckSquare} />
              <Link to="/"> Dashboard</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCalendar} />
              <Link to="/povertydata"> Poverty Data</Link>
            </li>

          </ul>
              
        </aside>
      </div>
          <Switch>
          <Route path="/" exact component={Mainpage }/>
         
          {/* <Mainpage className="statistics"></Mainpage> */}
        
         
          <Route path="/povertydata" component={CensusMainpage}>
        
          </Route>
         
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;
