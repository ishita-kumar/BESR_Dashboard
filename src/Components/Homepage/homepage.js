import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timeline from "./newfile";
import Ani from "./aninumber";
import Slider from "./mainstuff";


import CustomizedSteppers from "./Stepper";
// import banner from "../../assets/images/banner2.png";
class homepage extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      open: false
    };
  
  }
  state = { value: 0, previous: 0 };
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
   
  if (isMobile) {
    return (
      <div>
       
     <Slider></Slider> 
     
    </div>
    );
  }
    else {
      return (
        <div id="contents">
          <div >
            <Slider></Slider> 
          </div>
        </div>
      );
    }
  
  }
}


export default homepage;
