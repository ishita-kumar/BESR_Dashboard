import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timeline from "./newfile";
import Ani from "./aninumber";
import Slider from "./mainstuff";

import CustomizedSteppers from "./Stepper";
// import banner from "../../assets/images/banner2.png";
class homepage extends Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div id="contents">
        <div >
          <Slider></Slider>
          {/* <img src={banner} /> */}
         
        </div>
      </div>
    );
  }
}

export default homepage;
