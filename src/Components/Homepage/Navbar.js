import React, { Component } from "react";
import "./Navbar.css";
import IULogo from "../../assets/images/iu.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section class="navigation ">
          <div class="nav-container ">
            <div class="brand">
              <a href="">Recover Monroe, IN</a>
            </div>
            <nav>
         
              <ul class="nav-list ">
                <li>
                  <a href="#indicators">Indicators</a>
                </li>
                <li>
                  <a href="#statistics">Statistics</a>
                </li>

                <li>
                  <a href="#updates">Updates</a>
                </li>
                <li>
                <a >   {" "}</a>
                </li>
                <li>
                <a >   {" "}</a>
                </li>
                <li className="">
                  <div style={{paddingTop:"10px",paddingBottom:"10px",paddingRight:"80px"}}>
                  <img className="iconlogo" src={IULogo}></img>
                  </div>
                </li>
          
                {/* <li>
          <a href="#tab-es6">Resources</a>
        </li> */}

              </ul>
              <ul>
              
                </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}
