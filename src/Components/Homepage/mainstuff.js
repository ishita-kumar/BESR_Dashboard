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
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <section>
            <div
              className="container-fluid"
              style={{ paddingLeft: "60px", paddingTop: "60px" }}
            >
              <h1>TABLEAU VISUALIZATIONS</h1>
              <h3></h3>
            </div>

            <Tableau></Tableau>
          </section>
        </div>

        <div style={{ backgroundColor: "#FFFFFF" }}>
          <section class="" id="tab-angular">
            <div
              className="container-fluid"
              style={{ paddingLeft: "60px", paddingTop: "60px" }}
            >
              <h1>STATISTICS</h1>
              <h3>
                View a breakdown of the data according to different categories
              </h3>
            </div>
            <div class="container-fluid" style={{ padding: "40px" }}>
              <Tabs></Tabs>
            </div>
          </section>
        </div>
        <div style={{ backgroundColor: "#F0F0F0" }}>
         
         <div
           className="container-fluid"
           style={{ paddingLeft: "60px", paddingTop: "60px" }}
         >
           <h1>RECOVERY UPDATES</h1>
           <div class="container-fluid">
  
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-6">
        <div class="card-header" style={{backgroundColor:"#005B94"}}>
        Updated: 8/3/2020
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{textAlign:"center"}}>Whats New</h5>
          <p class="card-text">COVID’s effects on the local economy are not ending anytime soon. This website provides insights on multiple metrics that can show the extent of the impact as well as the people and industries most likely affected.

One compelling metric is the monthly unemployment rate.Unemployment is the highest it’s been since the 2008 recession. The months of March through June have seen the highest unemployment in the past 20 years.

We can see more detail when looking at the weekly claims filed for unemployment benefits. Accommodation and food service workers were the first and hardest hit, with more than 2,000 claims filed in the first quarter of 2020. Many other sectors, such as healthcare and social assistance and retail trade are also struggling. These sectors, along with education and manufacturing, were the largest employers in 2018.

Mobility data tracks how much people got out and about, shared in Google mobility trend reports. These show that people continued (albeit at a lower rate) to go to the grocery and pharmacy, but retail, restaurants and workplaces continue to see fewer trips. However, the number of trips to parks and recreation areas has actually risen. These mobility trends can help us see economic activity but can also point us to issues around the spread of Covid.

These and other metrics can all be viewed within this dashboard - we hope you find it useful!</p>
       
        </div>
      </div>
    </div>
    <div class="col-md-3" style={{alignContent:"right"}}>
      <div class="card mb-6">
        <div class="card-header" style={{backgroundColor:"#EA941A"}}>
        Explore Newsletter
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{textAlign:"center"}}> </h5>
          <p class="card-text">
          NewsLetter June
       NewsLetter July
       NewsLetter August
       NewsLetter June
          </p>

        </div>
      </div>
    </div>
    </div>
    </div>

         </div>
         <div class="container-fluid" style={{ padding: "40px" }}>
           
         </div>
      
     </div>
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="container-fluid"
            style={{ paddingLeft: "60px", paddingTop: "60px" }}
          >
            <h1>RESOURCES</h1>
            <h3></h3>
          </div>
          <div class="container-fluid" style={{ padding: "40px" }}></div>
        </div>

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
      </div>
    );
  }
}
