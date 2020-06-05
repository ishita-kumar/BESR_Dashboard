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
import Mainpage from "./Components/Map/Mainpage"
import Homepage from "./Components/Homepage/homepage.js"
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
              <Link to="/"> Homepage</Link>
            </li>
            <li>
          <FontAwesomeIcon icon={faCheckSquare} />
              <Link to="/Map"> Map</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCalendar} />
              <Link to="/PovertyData"> Poverty Data</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCalendar} />
              <Link to="/CensusTracts"> Census Tracts</Link>
            </li>

          </ul>
              
        </aside>
      </div>
          <Switch>
          <Route path="/" exact component={Homepage }/>
          <Route path="/Map" exact component={Mainpage }/>
          
          <Route path="/PovertyData" exact component={povertyMainpage }/>
          {/* <Mainpage className="statistics"></Mainpage> */}
        
         
          <Route path="/CensusTracts" component={CensusMainpage}>
        
          </Route>
         
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;
