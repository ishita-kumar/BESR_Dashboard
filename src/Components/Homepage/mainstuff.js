import React, { Component } from "react";
import "./slider.css";
import Navbar from "./Navbar.js";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import Stats from "./numbersstats";
import banner from "../../assets/images/banner2.png";
import Tabs from "./tab";
import ParticlesBg from "particles-bg";
import Download from "./Downloadpdf";
import SplitText from "react-pose-text";
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
};

export default class mainstuff extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div style={{ backgroundColor: "#F0F0F0" }}>
          <section>
            <div
              className="container-fluid"
              style={{ paddingLeft: "60px", paddingTop: "60px" }}
            >
              <h1>MAJOR INDICATORS</h1>
              <h3>
                Summary of the economic impact of COVID-19, Monroe County, IN
              </h3>
            </div>

            <Stats></Stats>
          </section>
        </div>

        <main>
          <section class="et-slidemap" id="tab-angular">
            <h1> Statistics </h1>
            <div class="container-fluid" style={{ padding: "40px" }}>
              <Tabs></Tabs>
            </div>
          </section>

          <section class="et-slidemap" id="tab-angular">
            <div class="container-fluid" style={{ padding: "40px" }}></div>
          </section>

          <section class="et-slide" id="tab-angular">
            <div id="contact" class="footer">
              <div class="container">
                <p class="footer-left">
                  {/* <Download></Download>                    <br /> */}
                  Copyright © 2020,
                  <a href="https://ctil.iu.edu/" style={{ color: "black" }}>
                    Crisis Technologies Innovation Lab, Indiana University
                  </a>
                  <br />
                  MIT LICENSE
                </p>

                <h3 class="footer-right">
                  <br />
                </h3>
                <h3 class="footer-centered">
                  AFFILIATIONS
                  <br />
                </h3>
                <br />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
