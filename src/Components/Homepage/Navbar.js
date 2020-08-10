import React, { Component } from "react";
import "./Navbar.css";
import IULogo from "../../assets/images/iu.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section class="navigation ">
          <div class="nav-container">
            <div class="brand">
              <a href="">Recover Monroe, IN</a>
            </div>
            <nav>
              <div class="nav-mobile">
                <a id="nav-toggle">
                  <span></span>
                </a>
              </div>
              <ul class="nav-list">
                <li>
                  <a href="#indicators">Indicators</a>
                </li>
                <li>
                  <a href="#statistics">Statistics</a>
                </li>

                <li>
                  <a href="#updates">Updates</a>
                </li>
                {/* <li>
          <a href="#tab-es6">Resources</a>
        </li> */}

                <li className="mr-auto ">
                  <div style={{padding:"10px"}}></div>
                  <img className="iconlogo" src={IULogo}></img>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}
