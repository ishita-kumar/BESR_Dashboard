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
   <Homepage></Homepage>
    </div>
  );
}

export default App;
