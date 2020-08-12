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
       
        <div class="welcome">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="content">
                  <h2> <strong>Poverty Data of Indiana State vs Monroe County</strong> </h2>
     

                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="charts" >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container"  style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>Poverty by Age</h2>
                  <Agedata></Agedata>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container " style={{"color":"black"}}>

                  <h2 style={{ textAlign: "center" }}>Poverty by Work Experience</h2>
                  <WorkExperience></WorkExperience>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="container-fluid" style={{"color":"black"}}>
            <div className="row">
              <div className="col-md-6">
                <div className="chart-container">
                  <h2 style={{ textAlign: "center" }}>Poverty by Gender</h2>
                  <Gender></Gender>
                  {/* <Employment></Employment> */}
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>By Race</h2>
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
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>Poverty by Employment and Gender</h2>
                  {/* <Gender></Gender> */}
                  <Employment></Employment>
                  <div>

                  </div>

                </div>
              </div>
              <div className="col-md-6">
                <div className="chart-container" style={{"color":"black"}}>
                  <h2 style={{ textAlign: "center" }}>Poverty by Education</h2>
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