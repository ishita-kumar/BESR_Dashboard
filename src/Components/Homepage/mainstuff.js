import React, { Component } from 'react'
import './slider.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import Stats from "./numbersstats"
import banner from "../../assets/images/banner2.png";
import MapPage from "../Map/Mainpage";
import Iframe from 'react-iframe';
import Tableau from "./TableauReact";
import SplitText from 'react-pose-text';
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

export default class mainstuff extends Component {
  
    render() {
        return (
            <div>
               <section class="et-hero-tabs" > 
     <h1>RECOVER BLOOMINGTON</h1>
    <div className="containerdu"  >
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
The show must go on        
      </SplitText>
      </div>
    <div class="et-hero-tabs-container sticky" style={{backdropFilter: "blur(15px)", background: "#21262f52"}}>
      <a class="et-hero-tab" href="#tab-es6">Indicators</a>
      <a class="et-hero-tab" href="#tab-flexbox">Recovery</a>
      <a class="et-hero-tab" href="#tab-react">Statistics</a>
      <a class="et-hero-tab" href="#tab-angular">Covid-19 Info </a>
      <span class="et-hero-tab-slider"></span>
    </div>
 
 
  </section>


  <main>
    <section class="et-slidemap" id="tab-es6">
    <h1> Major Indicators </h1>
    <h3>Quick Stats about Monroe County</h3>

     <Stats></Stats>
    </section>
   
    <section class="et-slide" id="tab-react">
      <h1>Recovery Updates</h1>
      <h3>What's Happening </h3>
    </section>
    <section class="et-slidemap" id="tab-angular">
      <h1>Visualizations</h1>
     <Tableau></Tableau>
  

      {/* <Iframe width="720px" height="480px" url="https://datausa.io/profile/geo/monroe-county-in/economy/tmap_ind_num_emp?viz=true" frameborder="0" ></Iframe>      <h3>something about angular</h3> */}
    </section>
    <section class="et-slidemap" id="tab-other">
      <h1>Unemployment Data by Census Tracts</h1>
      <h3></h3>
      <MapPage ></MapPage>  
    </section>
    
    </main>
            </div>
        )
    }
}
