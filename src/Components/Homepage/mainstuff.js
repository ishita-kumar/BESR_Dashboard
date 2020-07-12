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
          {/* <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Recover Bloomington
            </SplitText> */}
          <h1>RECOVER BLOOMINGTON</h1>
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

            <Stats></Stats>
          </section>

          <section class="et-slidemap" id="tab-react">
            <h1>Recovery Updates</h1>
            <div class="container-fluid">
              <div class="row" style={{ padding: "40px" }}>
                <div class="col-md-6">
                  <h4 style={{ textAlign: "justify" }} >
                    Things have stabilized somewhat since the initial downturn,
                    but COVID’s effects on the local economy are not ending
                    anytime soon. Unemployment data shows this. Unemployment is
                    the highest it’s been since the 2008 recession, with the
                    first quarter 2020 unemployment being the largest seen in
                    the past 20 years. Unemployment remains up, hitting
                    accommodation and food service the hardest with over 2000
                    unemployments claims filed in the first quarter of 2020.
                    Many other sectors like healthcare and social assistance and
                    retail trade are also struggling. These sectors, along with
                    Education and manufacturing, were the largest employers in
                    2018. Education, the biggest sector in 2020, had 700 claims
                    filed in the first quarter of 2020.
                  </h4>
                </div>
                <div class="col-md-6">
                  <h4 style={{ textAlign: "justify" }}>
                    Mobility data tracks how much people are moving in different
                    areas, shared in Google mobility reports. It shows that
                    people have returned to grocery and pharmacy trips around
                    the same amount as before, but retail and recreation,
                    transit stations, and workplaces still have much lower
                    travel. The average percentage change shows that the amount
                    of people visiting parks and recreation areas has actually
                    risen. People who are moving may be driving economic
                    activity, but they may also be spreading COVID. Each person
                    with COVID in Monroe county infects more than 1 other person
                    on average. The specific data and charts around
                    unemployment, COVID, and mobility are below. All data is
                    local to Monroe County."
                  </h4>
                </div>
              </div>
            </div>
           
          </section>
          <section class="et-slidemap" id="tab-angular">
          <h1> Insights </h1>
            <Tabs></Tabs>
           
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
