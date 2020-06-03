import React, { Component } from 'react';
import RaceData from "./Racedata"
import Agedata from "./agepeople"
import Employment from "./employmentdata"
import WorkExperience from "./workexperience"
import Education from "./Education"
import Gender from "./genderdata"

class povertyMainpage extends Component {
  render() {
    return (
      <div id="contents">
        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>Age Data</h2>
                  <Agedata></Agedata>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  
                  <h2 style={{textAlign:"center"}}>Work Experience</h2>
                  <WorkExperience></WorkExperience>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>By Gender</h2>
                  <Gender></Gender>
                  {/* <Employment></Employment> */}
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                <h2 style={{textAlign:"center"}}>By Race</h2>
                  <RaceData></RaceData>
                </div>
              </div>
              
              

            </div>
          </div>
        </section>
        <section className="charts">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>By Gender</h2>
                  {/* <Gender></Gender> */}
                  <Employment></Employment>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>Employment Data</h2>
                 <Education></Education>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default povertyMainpage;

{/* <div className="col-md-3">
                <div className="chart-container">
                  <h2 style={{textAlign:"center"}}>Education</h2>
                 <Education></Education>
                </div>
              </div> */}