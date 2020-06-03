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
// import { Link } from '@material-ui/core';
import Mainpage from "../Components/Mainpage"
import povertyMainpage from "../Components/PovertyData/povertymainpage"



class Navbar extends Component {

  render() {
    return (
      <div>
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
              <Link to="/">Dashboard</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCalendar} />
              <Link to="/povertydata">Poverty Data</Link>
            </li>

          </ul>
              
        </aside>
      </div>
          <Switch>
          <Route path="/">
          <div id="contents">
          <Mainpage className="statistics"></Mainpage>
          </div>
          </Route>
          <Route path="/povertydata">
          <div id="contents">
            <povertyMainpage  ></povertyMainpage>
            </div>
          </Route>
         
        </Switch>
     
      </Router>
      </div>
      
    );
  }
}



export default Navbar;