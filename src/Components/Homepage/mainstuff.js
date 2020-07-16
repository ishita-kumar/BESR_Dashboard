import React, { Component } from "react";
import "./slider.css";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import Stats from "./numbersstats";
import banner from "../../assets/images/banner2.png";
import Tabs from "./tab";
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
        <section class="et-hero-tabs">
          <div className="row">
            <div className="textBloomington">
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Recover Bloomington..........
              </SplitText>
            </div>
          </div>

          <div className="containerdu"></div>
          <div
            class="et-hero-tabs-container sticky"
            style={{ backdropFilter: "blur(15px)", background: "#21262f52" }}
          >
            <a class="et-hero-tab" href="#tab-es6">
              Indicators
            </a>
            <a class="et-hero-tab" href="#tab-flexbox">
              Recovery
            </a>
            <a class="et-hero-tab" href="#tab-react">
              Statistics
            </a>
            <a class="et-hero-tab" href="#tab-angular">
              Resources{" "}
            </a>
            <span class="et-hero-tab-slider"></span>
          </div>
        </section>

        <main>
          <section class="et-slidemap" id="tab-es6">
        
    
            <h1> Major Indicators </h1>
            <h3 style={{ textAlign: "left" }}>
                  
                  </h3>
            <Stats></Stats>
          </section>

          <section class="et-slidemap" id="tab-react">
            <h1>Recovery Updates</h1>
            <div class="container-fluid">
              <div class="row" style={{ padding: "40px" }}>
                <div class="col-md-12">
                  <h3 style={{ textAlign: "left" }}>
                    COVID’s effects on the local economy are not ending anytime
                    soon. This website provides insights on multiple metrics
                    that can show the extent of the impact as well as the people
                    and industries most likely affected.
                  </h3>

                  <h3>
                  <strong> One compelling metric is the monthly unemployment rate.</strong> 
                    Unemployment is the highest it’s been since the 2008
                    recession. The months of March through June have seen the
                    highest unemployment in the past 20 years.{" "}
                  </h3>

                  <h3>
                   <strong>We can see more detail when looking at the weekly claims
                    filed for unemployment benefits.</strong>  Accommodation and food
                    service workers were the first and hardest hit, with more
                    than 2,000 claims filed in the first quarter of 2020. Many
                    other sectors, such as healthcare and social assistance and
                    retail trade are also struggling. These sectors, along with
                    education and manufacturing, were the largest employers in
                    2018.
                  </h3>

                  <h3>
                  <strong>Mobility data tracks how much people got out and about,
                    shared in Google mobility trend reports.</strong>   These show that
                    people continued (albeit at a lower rate) to go to the
                    grocery and pharmacy, but retail, restaurants and workplaces
                    continue to see fewer trips. However, the number of trips to
                    parks and recreation areas has actually risen. These
                    mobility trends can help us see economic activity but can
                    also point us to issues around the spread of Covid.
                  </h3>
                  <h3>
                    These and other metrics can all be viewed within this
                    dashboard - we hope you find it useful!
                  </h3>
                  <h3></h3>
                </div>
              </div>
            </div>
          </section>
          <section class="et-slidemap" id="tab-angular">
            <h1> Insights </h1>
            <div class="container-fluid" style={{ padding: "40px" }} >
            <Tabs></Tabs>
            </div>
           
          </section>
          <section
            class="et-slidemap"
            id="tab-other"
            style={{ paddingTop: "40px" }}
          ></section>
        </main>
        {/*  */}
      </div>
    );
  }
}
