import React, { Component } from "react";
import "./slider.css";
import Navbar from "./Navbar.js";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import Stats from "./numbersstats";
import banner from "../../assets/images/banner2.png";
import Tabs from "./tab";
import Tableau from "./TableauReact";
import ParticlesBg from "particles-bg";
import Download from "./Downloadpdf";
import SplitText from "react-pose-text";
import Desktop from "../../assets/images/desktoplogo.png";
import IULogo from "../../assets/images/iu.jpg";
import IBRC from "../../assets/images/IBRC.png";
import August from "../../assets/images/Aug.pdf";
import July from "../../assets/images/july.pdf";
import BEDC from "../../assets/images/BEDC.png";

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
        <div class="jumbotron jumbotron-fluid" id="mobileonly">
          <div class="container cola">
            <h6>
              <svg
                width="2em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-laptop"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"
                />
                <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
              </svg>
           This WebApp is not available on Mobile, please switch to desktop.
            </h6>
          </div>
        </div>
        <div style={{ backgroundColor: "#F0F0F0" }}>
          <div className="container-fluid maincomponent">
            <h1 className="heading">MAJOR INDICATORS</h1>
            <h3 className="subheading">
              Summary of the economic impact of COVID-19, Monroe County, IN
            </h3>
          </div>
          <section id="indicators">
          
            <Stats></Stats>
          </section>
        </div>

        <div style={{ backgroundColor: "#FFFFFF" }}>
          <section class="" id="statistics">
            <div className="container-fluid maincomponent">
              <h1 className="heading">STATISTICS</h1>

              <h3 className="subheading">
                View a breakdown of the data according to different categories
              </h3>
            </div>
            <div class="container-fluid " style={{ padding: "60px" }}>
              <Tabs></Tabs>
            </div>
          </section>
        </div>
        {/* <div style={{ backgroundColor: "#FFFFFF", paddingBottom: "60px" }}>
          <section>
            <div
              className="container-fluid maincomponent"
              style={{
              
                paddingBottom: "60px",
              }}
            >
              <h3  className="heading">TABLEAU VISUALIZATIONS</h3>
              
            </div>

            <Tableau></Tableau>
          </section>
        </div> */}

        {/* <section class="" id="mobileonly">
          <div className="container-fluid maincomponent">
            <div className="row1" style={{ textAlign: "center" }}>
              <div className="coli-md-3">
                <img className="desktop" src={Desktop}></img>
              </div>
            </div>
            <h3 className="subheading">
              <hr className="hrgreen"></hr>
              Open this on a Desktop or laptop for more!
            </h3>
          </div>

          <div class="container-fluid " style={{ padding: "60px" }}></div>
        </section> */}

        <section id="updates">
          <div style={{ backgroundColor: "#F0F0F0", paddingBottom: "60px" }}>
            <div className="container-fluid maincomponent">
              <h1 className="heading">RECOVERY UPDATES</h1>
              <h3 className="subheading">Our intepretation of the data.</h3>
            </div>

            <div class="container-fluid ">
              <div class="row maincomponent">
                {/* <div class="col-auto mb-3"> */}
                <div className="col-sm-3 col-md-9">
                  <div
                    class="card mb-3"
                    style={{
                     
                    }}
                  >
                    <div
                      class="card-header"
                      style={{
                        backgroundColor: "#005B94",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Updated: 8/3/2020
                    </div>
                    <div class="card-body">
                      <h5 class="card-title" style={{ textAlign: "center" }}>
                        Whats New
                      </h5>
                      <div class="card-text" style={{ textAlign: "justify" }}>
                        <p>
                          COVID’s effects on the local economy are not ending
                          anytime soon. This website provides insights on
                          multiple metrics that can show the extent of the
                          impact as well as the people and industries most
                          likely affected.
                        </p>
                        <p>
                          One compelling metric is the monthly unemployment
                          rate.Unemployment is the highest it’s been since the
                          2008 recession. The months of March through June have
                          seen the highest unemployment in the past 20 years.
                        </p>
                        <p>
                          {" "}
                          We can see more detail when looking at the weekly
                          claims filed for unemployment benefits. Accommodation
                          and food service workers were the first and hardest
                          hit, with more than 2,000 claims filed in the first
                          quarter of 2020. Many other sectors, such as
                          healthcare and social assistance and retail trade are
                          also struggling. These sectors, along with education
                          and manufacturing, were the largest employers in 2018.
                        </p>
                        <p>
                          {" "}
                          Mobility data tracks how much people got out and
                          about, shared in Google mobility trend reports. These
                          show that people continued (albeit at a lower rate) to
                          go to the grocery and pharmacy, but retail,
                          restaurants and workplaces continue to see fewer
                          trips. However, the number of trips to parks and
                          recreation areas has actually risen. These mobility
                          trends can help us see economic activity but can also
                          point us to issues around the spread of Covid.
                        </p>
                        <p></p>
                        These and other metrics can all be viewed within this
                        dashboard - we hope you find it useful!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3">
                  <div
                    class="card"
                    style={{
                     
                    }}
                  >
                    <div
                      class="card-header"
                      style={{
                        backgroundColor: "#EA941A",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                    Explore Newsletter
                    </div>
                    <div class="card-body">
                      
                      <div class="card-text" style={{ textAlign: "justify" }}>
                      <p><a href={August}>Newsletter 01 - 08/05/2020</a></p>
                      
                      <p><a href={July}>Newsletter 02 - 07/05/2020</a></p>
                      
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="col-auto mb-3">
                <div
                  class="card mb-6"
                  style={{
                    width: "35rem",
                   
                  }}
                >
                  <div
                    class="card-header"
                    style={{ backgroundColor: "#EA941A" }}
                  >
                    Explore Newsletter
                  </div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ textAlign: "center" }}>
                      {" "}
                    </h5>
                    <p class="card-text">
                      NewsLetter
                      <hr></hr>
                      June NewsLetter
                      <hr></hr>
                      July NewsLetter August
                      <hr></hr>
                      NewsLetter
                      <hr></hr>
                      June
                    </p>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div class="container-fluid " style={{ padding: "40px" }}></div>
          </div>
        </section>

        {/* <div style={{ backgroundColor: "#FFFFFF", padding: "40px" }}>
          <div
            className="container-fluid maincomponent" 
          >
            <h1   className="heading" >RESOURCES</h1>
            <div class="col-auto mb-3">
              <div
                class="card mb-6"
                style={{ marginRight: "80px", border: "none" }}
              >
                <div class="card-body">
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    {" "}
                  </h5>
                  <p class="card-text">
                    01. Rebuilding in Times of Crisis
                    <hr></hr>
                    02. Planning with a Risk Assessment and Hazard Analysis
                    Framework
                    <hr></hr>
                    03. The Future of Work for a Modern Economy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid" style={{ padding: "40px" }}></div>
        </div> */}

        <div id="contact" class="footer" style={{ backgroundColor: "#FFFFFF" }}>
          <div class="container-fluid">
            <p class="footer-left">
              {/* <Download></Download>                    <br /> */}
              <h1 className="heading">ACKNOWLEDGEMENTS </h1>
              Copyright © 2020,
              <a href="https://ctil.iu.edu/" style={{ color: "black" }}>
              The Trustees of Indiana University
              </a>
            </p>

            <h3 class="footer-right">
              <div className="row">
                <div className="col-auto mb-3">
                  <img className="iconlogo" src={IULogo}></img>
                </div>
                <div className="col-auto mb-3">
                  <span className="CTIL"> CTIL</span>
                </div>
                <div className="col-auto mb-3">
                  <img className="iconlogo" src={IBRC}></img>
                </div>
                <div className="col-auto mb-3">
                  <img className="iconlogo" src={BEDC}></img>
                </div>
              </div>
            </h3>
            <h3 class="footer-centered">
              <br />
            </h3>

            <br />
          </div>
        </div>
      </div>
    );
  }
}
